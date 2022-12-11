import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cosmatic-two',
  templateUrl: './cosmatic-two.component.html',
  styleUrls: ['./cosmatic-two.component.css']
})
export class CosmaticTwoComponent implements OnInit {
@Input() product;
  constructor() { }

  ngOnInit() {
  }

}
