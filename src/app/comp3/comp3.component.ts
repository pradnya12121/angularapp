import { Component, OnInit } from '@angular/core';
import { UtilityServiceService } from '../Services/utility-service.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {
userName;
  constructor(private _utilityService:UtilityServiceService) {
    // this._utilityService.userName.subscribe(res =>{
    //   this.userName=res;
    // })
   }

  ngOnInit() {
  }
  onUpdate(uname){
    // console.log(uname.value)
    // this._utilityService.userName.next(uname.value);

  }

}
