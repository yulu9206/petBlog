import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../http.service';
import { Router } from '@angular/router';
import {AuthService} from './../../auth/auth.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  topics = null;
  errors = null;
  profile = null;
  newtopic = {topic:'', authorName:'' };  

  constructor(private _httpService: HttpService, private _router: Router, private _authService:AuthService) { }
  
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
  
  onSubmit(form){
    if (!form.valid) {
  		return;
  	}
    this.createTopic();  
  }  

  createTopic(){
    this.newtopic.authorName = this.profile.nickname;
    console.log('new compo is trying to send', this.newtopic);
    this._httpService.createTopic(this.newtopic)
    .then((data)=>{
      console.log("After creating a topic!", data);
      this.newtopic = {topic:'', authorName:'' };
    })
    .catch((err)=>{
      console.log("Something went wrong with the creation!", err);
    })
  }
  // delete(id){
  //   this._httpService.deleteTopic(id)
  //   .then((data)=>{
  //     console.log("data from deleting", data);
  //     if(data.message == "Success"){
  //       this.getTopics();
  //     }
  //   })
  //   .catch((err)=> {
  //     console.log("error from deleting", err);
      
  //   })
  // }

  ngOnInit() {
    this.getTopics();
    console.log('userProfile is', this._authService.userProfile);    
    if (this._authService.userProfile) {
      this.profile = this._authService.userProfile;
    } else {
      this._authService.getProfile((err, profile) => {
        this.profile = profile;
        console.log('profile is', this.profile);
      });
    }    
  }
}



