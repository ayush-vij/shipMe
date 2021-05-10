import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<firebase.User>;;
  messages: any;

  constructor(private firebaseAuth: AngularFireAuth, private router: Router, private toastController: ToastController) {
    this.user = firebaseAuth.authState;
  }

  signup(email: string, password: string) {
    this.firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
        this.router.navigate(['../choosescreen/']);
      })
      .catch(err => {
        // console.log('Something went wrong:',err.message);
        // document.getElementById("demo").innerHTML = err.message;
        this.presentErrorToast(err.message);
        
        
      });
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then(value => { 
        console.log('Nice, it worked!');
        this.router.navigate(['../choosescreen/']); 
        document.getElementById("demos").innerHTML = "Welcome!";
      })
      .catch(err => {
        // console.log('Something went wrong:',err.message);
        // document.getElementById("demo").innerHTML = err.message;
        this.presentErrorToast(err.message);
      });
  }

  logout() {
    this.firebaseAuth.signOut();
  }

  async presentErrorToast(error) {
    const toast = await this.toastController.create({
      message: error,
      duration: 2000,
      
    });
    toast.present();
  }
}