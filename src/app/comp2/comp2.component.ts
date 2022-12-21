import { Component, OnInit } from '@angular/core';
import { UtilityServiceService } from '../Services/utility-service.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
// userName;
combine=[];
product={};
  constructor(private _utilityService:UtilityServiceService) {
//     this._utilityService.userName.subscribe(res =>{
// this.userName=res;
//     } )


this._utilityService.product.subscribe(result =>{
  this.product=result;

   console.log('result' ,result)
   console.log('combine',this.product)
  // this.array.push(this.product);
    // console.log(this.array)
})




   }

  ngOnInit() {
  }
  onUpdate(pid,pname,pprice){
    // console.log(uname.value)
    // this._utilityService.userName.next(uname.value);



    console.log(pid.value,pname.value,pprice.value);
    //next method is used to pass the value or data to observable
    // this._utilityService.userName.next(uname.value);
    var  combine=[pid.value,pname.value,pprice.value]
    this._utilityService.product.next(combine);

  }

}
