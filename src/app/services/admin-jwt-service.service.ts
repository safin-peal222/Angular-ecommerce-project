import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminJwtServiceService {
  url = "http://localhost:5000/user/signup";


  constructor(private http: HttpClient) { }

  saveUser(user: any) {
    return this.http.post(this.url, user)

  }
}
