import { Component, OnInit } from '@angular/core';
import { AddProductService } from '../services/add-product.service';
import { LoginService } from '../services/login-service/login.service';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
@Component({
  selector: 'app-all-data',
  templateUrl: './all-data.component.html',
  styleUrls: ['./all-data.component.css']
})
export class AllDataComponent implements OnInit {
  allProducts: any;
  showItem: any;
  constructor(private productService: AddProductService, private router: Router, private loginService: LoginService) { }

  ngOnInit(
  ): void {
    console.log(this.allProducts);
    this.productService.getConfig().subscribe((res: any) => {
      this.allProducts = res;
      this.length = res.length;
    })
  }


  displayedColumns: string[] = ['id', 'category', 'price', '_id'];

  deleteProduct(data: any) {
    console.log(data);
    this.loginService.deletedContact(data).subscribe((res: any) => {
      console.log(res);
    });
  }



  editProduct(data: any) {
    this.router.navigate(['add-product'], { state: { product: data } });
  }

  length: number = 0;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  onpageChange(event: PageEvent) {
    let startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.allProducts.length) {
      endIndex = this.allProducts.length;

    }

    this.showItem = this.allProducts.slice(startIndex, endIndex);
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }


}
