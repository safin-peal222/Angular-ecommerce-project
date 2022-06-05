import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  cart: any = 0;
  @Input() item: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.item.category)
  }

}
