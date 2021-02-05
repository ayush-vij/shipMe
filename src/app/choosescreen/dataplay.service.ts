import { HttpClient } from '@angular/common/http';
import { variable } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core'
import { RouterLink } from '@angular/router';
import { dataplay } from './dataplay.model';

@Injectable({
  providedIn: 'root'
})
export class DataplayService {

  private dataplay: dataplay[]=[];
  constructor(private http: HttpClient) { }
  private _newdata: dataplay[] = [];
  get posts() {
    return [...this._newdata];
  }
  newPostData(
    custype: string,
    travelfrom: string,
    travelcity: string,
    travelto: string,
    traveltocity: string,
    booked: string,
    email: string,
    traveldate: string){
      const newPostData = new dataplay(
        Math.random().toString(),
        custype,
        travelfrom,
        travelcity,
        travelto,
        traveltocity,
        booked,
        email,
        traveldate,
      );
      this.http.post('https://postship-2c320-default-rtdb.firebaseio.com/newPostData.json',
      {...newPostData, id:null}).subscribe(response=>{
        console.log(response);
      });
      this._newdata.push(newPostData);
      console.log(this._newdata)

  }
  }
