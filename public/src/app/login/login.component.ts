import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpService } from './../http.service';
import { Router } from '@angular/router';
import {CookieService} from 'angular2-cookie/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    name:'',
  }
  gotUser = null;
  errors = null;
  constructor(private _httpService: HttpService, private _router: Router, private _cookieService:CookieService) { }
  ngOnInit(){
    this._cookieService.removeAll();
  } 
  getOneUser(){
    console.log('trying to get user' )
    this._httpService.getOneUser(this.user.name)
    .then((data)=>{
      this.gotUser = data.user;
      console.log("gotuser is", this.gotUser);
      if (this.gotUser == null){
      console.log("gotuser is null, creating new user");
      this.creatNewUser();
      // this._router.navigate(['/dashboard']);
      }
      this._cookieService.putObject('user', this.gotUser);
      console.log('user in the cookie is',this.gotUser );
      this._router.navigate(['/dashboard']);
    })
    .catch((err)=>{
      console.log("Got an error getting the user", err);
    })
  }
  
  creatNewUser(){
    this._httpService.newUser(this.user)
    .then(data => {
      console.log('login compo sent user', data);
      this.gotUser = data.user;
      console.log('now gotuser is ', this.gotUser); 
      this._cookieService.putObject('user', this.gotUser);
      console.log('user in the cookie is',this.gotUser );
      this._router.navigate(['/dashboard']); 
    })
    .catch(err => {console.log('login como has error in sending data', err);
    })
  }

  onSubmit(form){
    if (!form.valid) {
  		return;
  	}
    this.getOneUser();
    // this._router.navigate(['/dashboard']);
    // console.log('gotuser is ', this.gotUser);  
    // if (this.gotUser == null){
    //   this.creatNewUser();
    //   this.getOneUser();
    // } 
      
    // this._cookieService.putObject('user', this.gotUser);
    // console.log('user in the cookie is',this.gotUser );
    // form.resetForm();    
    
  }  
} 	

