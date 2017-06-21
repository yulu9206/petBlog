import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    name:'',
  }
  constructor(private _httpService: HttpService, private _router: Router) { }
  onSubmit(form){
    if (!form.valid) {
  		return;
  	}
  	this._httpService.newUser(this.user)
    .then(data => {
      console.log('login compo sent user', data)
      this._router.navigate(['/dashboard'])
    })
    .catch(err => {console.log('login como has error in sending data', err)})
    this.user = {
      name:'',
    }
  }
  ngOnInit() {
  }

}
