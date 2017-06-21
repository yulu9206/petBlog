import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs'

@Injectable()
export class HttpService {
  
  constructor(private _http: Http) { }
    // getWeather(city){
    // return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=2d48fac56559bdc6af0e1acf4cf2b9ca').map((data)=>data.json()).toPromise()

  // }
  newUser(user){
    console.log('service sending new user', user);
    return this._http.post('/new_user', user).map(data => data.json()).toPromise();
  }
}
