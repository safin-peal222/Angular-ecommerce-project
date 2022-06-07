import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }
  isLogin: boolean = false
  ngOnInit(): void {
    this.checkLogIn();
  }
  logout() {
    localStorage.removeItem("token");
  }
  checkLogIn() {
    const token = localStorage.getItem('token');
    if (token) {
      this.isLogin = true;
    }
    // console.log(token);

  }
}
