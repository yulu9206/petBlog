import { Component, OnInit } from '@angular/core';
import {AuthService} from './../../auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: any;
  constructor(public _authService: AuthService) { 
    // if (this._authService.userProfile) {
    //   this.profile = this._authService.userProfile;
    // } else {
    //   this._authService.getProfile((err, profile) => {
    //     this.profile = profile;
    //   });
    // }
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
