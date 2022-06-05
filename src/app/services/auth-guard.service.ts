import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  isLoggedIn = false;
  redirectUrl: any;

  constructor(private router: Router) { }

  getLogIn() {
    return localStorage.getItem('token');

  }


  if(redirectUrl: any) {
    this.router.navigate([this.redirectUrl]);
    console.log(redirectUrl);
    this.redirectUrl = null;
  }


}
