import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  price:number=50000;
  price1:number=35450;
  price2:number=30000;
  price3:number=14990;
  constructor() { }

  ngOnInit() {
  }

}
