import { Component, OnInit } from '@angular/core';
import {CookieService} from 'angular2-cookie/core';
import { Router } from '@angular/router';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user = {};
  topics = null;
  errors = null;
  
  constructor(private _httpService: HttpService, private _router: Router, private _cookieService:CookieService) { }
  
  getTopics(){
    this._httpService.getTopics()
    .then((data)=>{
      console.log("Getting topics", data);
      if(data.message == "Success"){
        this.topics = data.topics;
      }
      else {
        this.errors = "There was a problem fetching topics";
      }
    })
    .catch((err)=>{
      console.log("Got an error by doing getTopics", err);
    })
  }

  delete(id){
    this._httpService.deleteTopic(id)
    .then((data)=>{
      console.log("data from deleting", data);
      if(data.message == "Success"){
        this.getTopics();
      }
    })
    .catch((err)=> {
      console.log("error from deleting", err);
      
    })
  }

  ngOnInit() {
    this.user = this._cookieService.getObject('user');
    if(!this.user) {
      this._router.navigate(['/']);
      console.log('no dashboard without login!')
    }
    console.log(this.user, 'is visiting dashboard');
    this.getTopics();
  }
}



