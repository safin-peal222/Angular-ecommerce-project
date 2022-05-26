import { _resolveDirectionality } from '@angular/cdk/bidi/directionality';
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthGuardService } from './services/auth-guard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {



  constructor(private authService: AuthGuardService,
    private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    console.log(url);
    return this.checkLogin(url);
  }
  checkLogin(url: string): boolean {

    if (this.authService.getLogIn()) {
      this.authService.redirectUrl = url;
      return true;


    }
    else {
      this.router.navigate(['/login']);

      alert("Please Login");
      return false;

    }
  }


}
