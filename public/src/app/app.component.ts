import { Component } from '@angular/core';
import {AuthService} from './auth/auth.service';
import { HttpModule } from '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpModule],
})
export class AppComponent {
  constructor(public _authService: AuthService){
    _authService.handleAuthentication();
  }

}
