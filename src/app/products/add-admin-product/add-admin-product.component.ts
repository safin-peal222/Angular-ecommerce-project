import { Component, OnInit } from '@angular/core';
import { AddProductService } from 'src/app/services/add-product.service';

@Component({
  selector: 'app-add-admin-product',
  templateUrl: './add-admin-product.component.html',
  styleUrls: ['./add-admin-product.component.css']
})
export class AddAdminProductComponent implements OnInit {

  constructor(private addService: AddProductService) { }

  products: any = [];

  ngOnInit(): void {
  }

  getProduct(data: any) {
    this.addService
      .getProduct(data)
      .subscribe(hero => this.products.push(hero));
  }

}
