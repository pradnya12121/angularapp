import { Component, OnInit } from '@angular/core';
import { EmployeeDetail } from '../models/employeeDetail';

@Component({
  selector: 'app-parentcomponent',
  templateUrl: './parentcomponent.component.html',
  styleUrls: ['./parentcomponent.component.css']
})
export class ParentcomponentComponent implements OnInit {
  eid:number;
  ename:string;
  edept:number;
  esalary:number;
  ecompany:number;
  constructor() { }

  ngOnInit() {
  }
  employeeDetails:EmployeeDetail[]=[];
  addData(item1,item2,item3,item4,item5){
    console.log(item1,item2)
   this.employeeDetails= [{eid:item1,ename:item2,edept:item3,esalary:item4,ecompany:item5}]
   console.log(this.employeeDetails);
  }

}

