import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { Topic } from './../topic';
import { Option } from './../option';
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
  onSubmit(form){
    if (!form.valid) {
  		return;
  	}
    this.createTopic();  
  }  

  createTopic(){
    this.newtopic._author = this.user._id;
    this.newtopic.authorName = this.user.name;
    console.log('new compo is trying to send', this.newtopic);
    this._httpService.createTopic(this.newtopic)
    .then((data)=>{
      console.log("After creating a topic!", data);
      if(data.message == "Success"){
        this.errors = null;
        this.createOption(this.newtopic.option1);
        this.createOption(this.newtopic.option2);
        this.createOption(this.newtopic.option3);
        this.createOption(this.newtopic.option4);
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
  createOption(option){
    var newoption = new Option();
    newoption._author = this.user._id;
    newoption.authorName = this.user.name;
    newoption.option = option;
    console.log('new compo is trying to send', newoption);
    this._httpService.createOption(newoption)
    .then((data)=>{
      console.log("After creating a option!", data);
      if(data.message == "Success"){
        this.errors = null;
      }
      else {
        this.errors = "Could not create your option, please try again."
      }      
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
