import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CartapiService {

  cartData: any = [];

  constructor(private http: HttpClient) { }



  addToCart(data: any) {
    this.cartData.push(data);
    console.log(this.cartData);



  }


  getCartdata() {
    return this.cartData;
  }
}
