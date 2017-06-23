import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { Topic } from './../topic';
import { Router } from '@angular/router';
import {CookieService} from 'angular2-cookie/core';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  user = null;
  errors = null;
  newtopic = new Topic();

  constructor(private _httpService: HttpService, private _router: Router, private _cookieService:CookieService) { }


  createTopic(form){
    this.newtopic._author = this.user._id;
    console.log('new compo is trying to send', this.newtopic);
    this._httpService.createTopic(this.newtopic)
    .then((data)=>{
      console.log("After creating a topic!", data);
      if(data.message == "Success"){
        this.errors = null;
        this._router.navigate(['/dashboard'])
      }
      else {
        this.errors = "Could not create your topic, please try again."
      }
      this.newtopic = new Topic()
      
    })
    .catch((err)=>{
      console.log("Something went wrong with the creation!", err);
    })
    
  }
  ngOnInit() {
      this.user = this._cookieService.getObject('user')
      if(!this.user) {
      this._router.navigate(['/']);
      console.log('no new topic without login!')
    }
    console.log(this.user, 'is visiting dashboard');
  }
}
