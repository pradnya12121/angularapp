import { Component, OnInit } from '@angular/core';
import { DemoService } from '../Services/demo.service';

@Component({
  selector: 'app-service-component1',
  templateUrl: './service-component1.component.html',
  styleUrls: ['./service-component1.component.css']
})
export class ServiceComponent1Component implements OnInit {

  constructor(private _demoService:DemoService) { }
products={};
apiData={};
  ngOnInit() {
    // this.products=this._demoService.product
    this._demoService.getUsersData().subscribe(data => {
      console.log('getting data from api', data);
      this.apiData=(data);
      console.log('getting data from array' ,this.apiData)
    })
  }
  }

  // onSubscribe(){
  //   // alert('servicecopm1 susribe')
  //   this._demoService.display();
  // }


  


