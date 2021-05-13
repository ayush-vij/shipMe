import { HttpClient } from "@angular/common/http";
import { variable } from "@angular/compiler/src/output/output_ast";
import { Injectable } from "@angular/core";
import { RouterLink } from "@angular/router";
import { PostData } from "./dataplay.model";
import { DAuthService } from '../dauth.service';
import { User } from '../dauth.model';

@Injectable({
  providedIn: "root",
})
export class DataplayService {
  private userInfo: User[] = [];
  constructor(private http: HttpClient) {}
  private _postdata: PostData[] = [];
  private _daata: PostData[] = [];

  get posts() {
    return [...this._postdata];
  }
  get userdetails() {
    return [...this.userInfo];
  }

  saveThis(pst: PostData){
    this._daata.push(pst);
    this._daata.push(pst);
  }

  
  newPostData(
    name: string,
    custype: string,
    travelfrom: string,
    travelcity: string,
    travelto: string,
    traveltocity: string,
    booked: string,
    email: string,
    intcode: string,
    phone: number,
    traveldate: Date
  ) {
    const newPostData = new PostData(
      Math.random().toString(),
      name,
      custype,
      travelfrom,
      travelcity,
      travelto,
      traveltocity,
      booked,
      email,
      intcode,
      phone,
      traveldate,
    );
    this.http
      .post("https://postship-2c320-default-rtdb.firebaseio.com/newPostData.json", {
        ...newPostData,
        id: null,
      })
      .subscribe((response) => {
        console.log(response);
      });
    this._postdata.push(newPostData);
    // console.log(this._postdata);
  }

  postCredzToDB(){
    var credzData: any;
  }
//comment
  fetchPostData() {
    var postdata: PostData[] = [];
    this.http
      .get("https://postship-2c320-default-rtdb.firebaseio.com/newPostData.json")
      .subscribe((response) => {
        for (const key in response) {
          postdata.push(
            new PostData(
              key,
              response[key].name,
              response[key].custype,
              response[key].travelfrom,
              response[key].travelcity,
              response[key].travelto,
              response[key].traveltocity,
              response[key].booked,
              response[key].email,
              response[key].intcode,
              response[key].phone,
              new Date(response[key].traveldate)
            )
          );
        }
      });
    this._postdata = postdata;
    console.log(this._postdata);
    return postdata;
  }
  getPostData(id: String) {
    return { ...this._postdata.find((p) => p.id === id) };
  }

  fetchUser(){
    var newVar: User[]=[];
    this.http.get('https://postship-2c320-default-rtdb.firebaseio.com/newUser.json')
    .subscribe(
      response => {
        for (const key in response){
          newVar.push(
            new User(
              key,
              response[key].fname,
              response[key].email,
              response[key].pwd,
            )
          );
          const name = response[key].fname;
          console.log("Name: " +response[key].fname);
          console.log("Email: " +response[key].email);
          console.log("Password: " +response[key].pwd);
        }
        
      }
    );
    return(newVar);    
    }

  removePostData(id: string) {
    this.http
      .delete(
        `https://postship-2c320-default-rtdb.firebaseio.com/newPostData/${id}.json`
      )
      .subscribe((response) => {
        console.log(response);
      });
    const position = this._postdata.findIndex((p) => p.id === id);
    this._postdata.splice(position, 1);
  }
}
