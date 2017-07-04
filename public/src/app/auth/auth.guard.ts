import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(public _authService: AuthService, public router: Router) {}

  canActivate(): boolean {
    if (!this._authService.isAuthenticated()) {
      this.router.navigate(['']);
      console.log('auth guard blocked')
      return false;
    }
    console.log('auth guard passed')
    return true;
  }

}