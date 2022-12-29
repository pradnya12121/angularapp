import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {
price:number=3799;
price1:number=2520;
price2:number=35500;
  constructor() { }

  ngOnInit() {
  }

}
