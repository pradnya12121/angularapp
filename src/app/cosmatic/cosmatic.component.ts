import { getLocaleExtraDayPeriodRules } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cosmatic',
  templateUrl: './cosmatic.component.html',
  styleUrls: ['./cosmatic.component.css']
})
export class CosmaticComponent implements OnInit {

  constructor() { }
product_list=[{name:"Ac",price:25000},
{name:"Washing Machine", price:35000},
{name:"freeze",price:17000},
{name:"LED",price:5000},
{name:"Home Theter",price:6000},{name:"Fan",price:3000}]

cosmatic_list=[{name:"Lipstic",price:5000},
{name:"EyeLiner", price:300},
{name:"Lipbalm",price:200},
{name:"Foundation",price:1000},
{name:"Consiler",price:600},{name:"Kajola",price:300}]

  ngOnInit() {
  }

}
