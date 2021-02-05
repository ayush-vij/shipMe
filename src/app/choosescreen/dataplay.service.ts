import { HttpClient } from "@angular/common/http";
import { variable } from "@angular/compiler/src/output/output_ast";
import { Injectable } from "@angular/core";
import { RouterLink } from "@angular/router";
import { PostData } from "./dataplay.model";

@Injectable({
  providedIn: "root",
})
export class DataplayService {
  private dataplay: PostData[] = [];
  constructor(private http: HttpClient) {}
  private _postdata: PostData[] = [];
  get posts() {
    return [...this._postdata];
  }
  newPostData(
    custype: string,
    travelfrom: string,
    travelcity: string,
    travelto: string,
    traveltocity: string,
    booked: string,
    email: string,
    traveldate: Date
  ) {
    const newPostData = new PostData(
      Math.random().toString(),
      custype,
      travelfrom,
      travelcity,
      travelto,
      traveltocity,
      booked,
      email,
      traveldate
    );
    this.http
      .post("https://ship-6ba1e-default-rtdb.firebaseio.com/newPostData.json", {
        ...newPostData,
        id: null,
      })
      .subscribe((response) => {
        console.log(response);
      });
    this._postdata.push(newPostData);
    // console.log(this._postdata);
  }

  fetchPostData() {
    var postdata: PostData[] = [];
    this.http
      .get("https://ship-6ba1e-default-rtdb.firebaseio.com/newPostData.json")
      .subscribe((response) => {
        for (const key in response) {
          postdata.push(
            new PostData(
              key,
              response[key].custype,
              response[key].travelfrom,
              response[key].travelcity,
              response[key].travelto,
              response[key].traveltocity,
              response[key].booked,
              response[key].email,
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

  removePostData(id: string) {
    this.http
      .delete(
        `https://ship-6ba1e-default-rtdb.firebaseio.com/newPostData/${id}.json`
      )
      .subscribe((response) => {
        console.log(response);
      });
    const position = this._postdata.findIndex((p) => p.id === id);
    this._postdata.splice(position, 1);
  }
}
