import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataManagerProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DataManagerProvider {

  constructor(public http: Http) {
    console.log('Hello DataManagerProvider Provider');
  }
  sendGame(obj){
    const url = "http://ballout-app.herokuapp.com/pushGame";
    this.http.post(url, obj).map(res=>res.json()).subscribe()

  }
  getGames(){
    return this.http.get("http://ballout-app.herokuapp.com/pullGames")
    .map(res=>res.json())

  }



}
