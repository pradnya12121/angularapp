import { Component, OnInit } from '@angular/core';
import { DemoService } from '../Services/demo.service';

@Component({
  selector: 'app-service-component2',
  templateUrl: './service-component2.component.html',
  styleUrls: ['./service-component2.component.css']
})
export class ServiceComponent2Component implements OnInit {

  constructor(private _demoService:DemoService) { }
   productss={};
  ngOnInit() {
    this.productss=this._demoService.product;
  }
  onSubscribe(){
    // alert('servicecopm1 susribe')
    this._demoService.display();
  }

}
