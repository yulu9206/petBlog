import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import * as auth0 from 'auth0-js';
// import {tokenNotExpired} from 'angular2-jwt';
// import {Auth0Lock} from 'auth0-lock';

// declare var Auth0Lock: any;

@Injectable()
export class AuthService {

  // lock = new Auth0Lock(
  //   'iKEfyiqhLRJlnUw8WL3fZPJfD8BQcJSA',
  //   'yulu9206.auth0.com'
  // );

// Listening for the authenticated event

  userProfile: any;

  auth0 = new auth0.WebAuth({
    clientID: 'e6og807SOE0XxmIUaMt0sJeE7T2waobR',
    domain: 'yulu9206.auth0.com',
    responseType: 'token id_token',
    audience: 'https://yulu9206.auth0.com/userinfo',
    redirectUri: 'http://localhost:8000',      
    scope: 'openid profile',
  });

  constructor(public router: Router) {
  //   this.lock.on("isAuthenticated", function(authResult) {
  // // Use the token in authResult to getUserInfo() and save it to localStorage
  //     this.lock.getUserInfo(authResult.accessToken, function(error, profile) {
  //       if (error) {
  //         console.log(error);
  //         return;
  //       }
    
  //       localStorage.setItem('accessToken', authResult.accessToken);
  //       localStorage.setItem('profile', JSON.stringify(profile));
  //     });
  //   });
  // }  
  // public login(): void {
  //   this.lock.show();
  // }

  // public isAuthenticated(){
  //   return tokenNotExpired();
  // }

  // public logout(): void {
  //   // Remove tokens and expiry time from localStorage
  //   localStorage.removeItem('profile');
  //   localStorage.removeItem('id_token');
  //   // localStorage.removeItem('expires_at');
  //   // Go back to the home route
  //   this.router.navigate(['/']);
  }
  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        this.router.navigate(['/home']);
      } else if (err) {
        this.router.navigate(['/home']);
        console.log(err);
      }
    });
  }

  private setSession(authResult): void {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  public getProfile(cb): void {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('Access token must exist to fetch profile');
    }
    const self = this;
    this.auth0.client.userInfo(accessToken, (err, profile) => {
      if (profile) {
        self.userProfile = profile;
      }
      cb(err, profile);
    });
  }
}

// handleAuthentication - looks for an authentication result in the URL hash and processes it with the parseHash method from auth0.js
// setSession - sets the user's access_token, id_token, and a time at which the access_token will expire
// logout - removes the user's tokens from browser storage
// isAuthenticated - checks whether the expiry time for the access_token has passed