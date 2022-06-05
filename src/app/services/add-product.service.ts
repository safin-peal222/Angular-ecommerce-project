import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AddProductService {
  url = "https://server-59.herokuapp.com/admin/add-products";
  // https://server-59.herokuapp.com
  constructor(private http: HttpClient) { }

  getProduct(product: any) {
    return this.http.post(this.url, product);
  }
  updateProduct(product: any) {
    return this.http.post("https://server-59.herokuapp.com/admin/update-products", product);
  }

  getConfig() {
    return this.http.get(this.url);
  }

  getCartData(cartItems: any) {
    return this.http.post("https://server-59.herokuapp.com/user/cart-data", cartItems);

  }

}
