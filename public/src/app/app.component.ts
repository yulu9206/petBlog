import { Component } from '@angular/core';
import { HttpService } from './http.service';
import {CookieService} from 'angular2-cookie/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _httpService: HttpService, private _cookieService:CookieService) { }
  // user = this._cookieService.getObject('user');
  loggedIn = false;

  ngOnInit() {
    if (this._cookieService.getObject('user')) {
      this.loggedIn = true;
    }
    // console.log('who is logged in now?',this.user)
  }

}
