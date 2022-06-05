import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AddProductService {
  url = "http://localhost:5000/admin/add-products";

  constructor(private http: HttpClient) { }

  getProduct(product: any) {
    return this.http.post(this.url, product);
  }
  updateProduct(product: any) {
    return this.http.post("http://localhost:5000/admin/update-products", product);
  }

  getConfig() {
    return this.http.get(this.url);
  }

  getCartData(cartItems: any) {
    return this.http.post("http://localhost:5000/user/cart-data", cartItems);

  }

}
