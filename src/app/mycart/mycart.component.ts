import { Component, OnInit } from '@angular/core';
import { CartapiService } from '../services/cartapi.service';
import { AddProductService } from '../services/add-product.service';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent implements OnInit {
  // items: any = [];
  // myItems: any;
  constructor(private cartService: CartapiService, private addService: AddProductService) { }

  ngOnInit(): void {

    // this.items = this.cartService.getCartdata();
    // // this.myItems = this.items.length
    // // console.log(this.myItems);
    // console.log(this.items.length);







  }

  getItemsAll() {
    return this.cartService.getCartdata()
  }

  displayedColumns: string[] = ['id', 'category', 'price'];
  dataSource = this.getItemsAll();


  buyButton() {
    console.log(this.cartService.getCartdata());
    this.addService.getCartData(this.cartService.getCartdata()).subscribe((res: any) => {
      console.log(res);
    })
  }






}


