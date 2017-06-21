import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _httpService: HttpService, private _cookieService:CookieService) { }
  ngOnInit() {}
  getCookie(key: string){
    return this._cookieService.get(key);
  }
  
}
