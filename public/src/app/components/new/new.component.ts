import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../http.service';
import { Router } from '@angular/router';
import { AuthService } from './../../auth/auth.service';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  profile = null;
  errors = null;
  newtopic = {topic:'', authorName:'' };

  constructor(private _httpService: HttpService, private _router: Router, private _authService:AuthService) { }

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

  ngOnInit() {
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
