import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.css']
})
export class DashboardCardComponent implements OnInit {
  cart: any = 0;
  @Input() item: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.item.category);
  }

  dataChanged(data: any) {
    this.cart = data;
    console.log(this.cart);


  }

  increment(data: any) {
    if (data == "plus") {
      this.cart = this.cart + 1;

    } else {
      if (this.cart == 0) {
        this.cart = 0;
      } else {
        this.cart = this.cart - 1;
      }
    }
  }




}
