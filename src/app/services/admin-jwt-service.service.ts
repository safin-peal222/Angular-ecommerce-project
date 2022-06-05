import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminJwtServiceService {
  url = "https://server-59.herokuapp.com/user/signup";


  constructor(private http: HttpClient) { }

  saveUser(user: any) {
    return this.http.post(this.url, user)

  }
}
