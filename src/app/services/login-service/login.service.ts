import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = "https://server-59.herokuapp.com/user/login";
  constructor(private http: HttpClient) { }
  saveLoginUser(logUser: any) {
    return this.http.post(this.url, logUser)
  }

  getToken() {
    return localStorage.getItem('token');
  }
  deletedContact(contactId: any) {
    const deletedData = 'https://server-59.herokuapp.com/admin/delete-products';
    return this.http.post(deletedData, { id: contactId });
  }
}
