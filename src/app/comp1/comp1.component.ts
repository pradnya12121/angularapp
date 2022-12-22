import { Component, OnInit } from '@angular/core';
// import { Product_demo } from '../models/product_demo';
import { UtilityServiceService } from '../Services/utility-service.service';
export class Product{
  id:number;
  name:string;
  price:number
}

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  //  array=[];
  combine=[];
 product=[];

  constructor(private _utilityService:UtilityServiceService) {

    // this._utilityService.userName.subscribe(res =>{
    //   this.userName=res;
    // })
   
    
    this._utilityService.product.subscribe(result =>{
      this.product.push(result);

       console.log('result' ,result)
       console.log('product',this.product)
      // this.array.push(this.product);
        // console.log(this.array)
    })
   }

  ngOnInit() {
  }
  onUpdate(pid,pname,pprice){
    console.log(pid.value,pname.value,pprice.value);
    //next method is used to pass the value or data to observable
    // this._utilityService.userName.next(uname.value);
    var  combine:Product={id:pid.value ,name: 'pname.value' , price:pprice.value}
    this._utilityService.product.next(JSON.stringify(combine));
    
    

  }
}
