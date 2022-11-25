import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch2',
  templateUrl: './ng-switch2.component.html',
  styleUrls: ['./ng-switch2.component.css']
})
export class NgSwitch2Component implements OnInit {
  selectedProduct:string;
  constructor() { }

  ngOnInit() {
  }
  getProductValue(value){
    console.log(value.target.value)
    this.selectedProduct=value.target.value
  }

}
