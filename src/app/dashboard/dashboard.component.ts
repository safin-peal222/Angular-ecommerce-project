import { Component, OnInit } from '@angular/core';
import { AddProductService } from '../services/add-product.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormsModule, Form } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  constructor(private productService: AddProductService, private router: Router, private route: ActivatedRoute) { }
  products: any;
  isLogin: boolean = false;
  ngOnInit(): void {
    this.getProducts();
    this.checkLogIn();
  }
  gotoAddProduct() {
    this.router.navigate(['add-product']);
  }
  gotoShowProduct() {
    this.router.navigate(['all-data']);
  }
  getProducts() {
    this.productService.getConfig().subscribe((res: any) => {
      this.products = res
    })

  }
  checkLogIn() {
    const token = localStorage.getItem('token');
    if (token) {
      this.isLogin = true;
    }

  }
  // showConfig() {

  // }
}








