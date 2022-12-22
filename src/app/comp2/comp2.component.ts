import { Component, OnInit } from '@angular/core';
import { Product } from '../comp1/comp1.component';
import { UtilityServiceService } from '../Services/utility-service.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
// userName;
combine=[];
product=[];
  constructor(private _utilityService:UtilityServiceService) {
//     this._utilityService.userName.subscribe(res =>{
// this.userName=res;
//     } )


this._utilityService.product.subscribe(result =>{
  this.product.push(result);

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
    
    var  combine:Product={id:pid.value ,name: 'pname.value' , price:pprice.value}
    this._utilityService.product.next(JSON.stringify(combine));

  }

}
