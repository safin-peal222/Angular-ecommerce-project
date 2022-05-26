import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login-service/login.service';

import { AuthGuardService } from 'src/app/services/auth-guard.service';
import jwt_decode from "jwt-decode";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  decoded: any;

  constructor(private login: LoginService,
    private authService: AuthGuardService, private router: Router) { }

  ngOnInit(): void {
  }


  getLoginUser(data: any) {

    this.login
      .saveLoginUser(data)
      .subscribe((res: any) => {

        if (res.token) {
          this.decoded = jwt_decode(res.token);
          localStorage.setItem("token", res.token);
          this.router.navigate(['my-cart']);
        }
      })
  }

}
