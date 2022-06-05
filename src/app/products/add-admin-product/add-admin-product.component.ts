import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddProductService } from 'src/app/services/add-product.service';

@Component({
  selector: 'app-add-admin-product',
  templateUrl: './add-admin-product.component.html',
  styleUrls: ['./add-admin-product.component.css']
})
export class AddAdminProductComponent implements OnInit {

  constructor(private addService: AddProductService, private router: Router) {
    this.statedata = this.router.getCurrentNavigation()?.extras.state;
    this.editdata = this.statedata?.product;
  }

  products: any = [];
  statedata: any;
  editdata: any;
  category: string = '';
  imgUrl: string = '';
  description: string = '';
  price: number = 0;
  ngOnInit(): void {
    console.log(this.editdata);
    if (this.editdata) {
      this.category = this.editdata.category;
      this.imgUrl = this.editdata.imgUrl;
      this.description = this.editdata.description;
      this.price = this.editdata.price;
    }
  }

  getProduct() {
    const data = {
      category: this.category,
      imgUrl: this.imgUrl,
      description: this.description,
      price: this.price
    }
    console.log(data);
    this.addService
      .getProduct(data)
      .subscribe(hero => this.products.push(hero));
  }
  updateProduct() {
    const data = {
      id: this.editdata._id,
      category: this.category,
      imgUrl: this.imgUrl,
      description: this.description,
      price: this.price
    }
    this.addService.updateProduct(data).subscribe(res => {
      console.log("succeed");
    })
  }

}
