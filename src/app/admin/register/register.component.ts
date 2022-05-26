import { Component, OnInit } from '@angular/core';
import { AdminJwtServiceService } from 'src/app/services/admin-jwt-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  users: any = [];

  constructor(private adminService: AdminJwtServiceService) { }

  ngOnInit(): void {
  }

  getUser(data: any) {

    this.adminService
      .saveUser(data)
      .subscribe(hero => this.users.push(hero));
  }



}
