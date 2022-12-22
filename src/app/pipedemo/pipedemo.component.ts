import { Component, OnInit } from '@angular/core';
import { UtilityServiceService } from '../Services/utility-service.service';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {
 todayDate =new Date();
 obser;
 price:number=90000;
 name:string="pradnya";
 num:number=4;
 emp={
  empid:1,
  empname:"Priyanka"
 }
  constructor(private _utilityService:UtilityServiceService) {
    this.obser=this._utilityService.userName;
   }

  ngOnInit() {
  }

}
