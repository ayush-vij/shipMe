import { HttpClient } from '@angular/common/http';
import { variable } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core'
import { RouterLink } from '@angular/router';
import { User } from './auth.model'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private details: User[]=[];
  constructor(private http: HttpClient) { }
  private _newUsers: User[] = [];
  newUser(
    fname: string,
    lname: string,
    email: string,
    pwd: string,){
      const newUser = new User(
        Math.random().toString(),
        fname,
        lname,
        email,
        pwd,
      );
      this.http.post('https://ship-6ba1e-default-rtdb.firebaseio.com/newUser.json',
      {...newUser, id:null}).subscribe(response=>{
        console.log(response);
      });
      this._newUsers.push(newUser);
      console.log(this._newUsers)

  }
  }
  
  //var  obj = await this.http.get('https://inkSell-ayush.firebaseio.com/newUser.json?fname=jainesh2')
    
      // console.log("THis is get obj conditon");
      //   obj.subscribe(response=>{
      //     console.log(response);
         

       