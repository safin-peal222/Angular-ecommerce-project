import { Component, OnInit } from '@angular/core';
import { AddProductService } from '../services/add-product.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormsModule, Form } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  constructor(private productService: AddProductService, private _router: Router) { }
  products: any;

  ngOnInit(): void {
    this.productService.getConfig()
      .subscribe((res: any) =>

        this.products = res, (err: any) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this._router.navigate(['/login'])
            }
          }
        }

      );
  }

  // showConfig() {

  // }








}
