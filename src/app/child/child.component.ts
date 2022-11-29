import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
    // @Input() employee_new:any;
    @Input() employee_new_one=[];
  constructor() { }

  ngOnInit() {
    console.table(this.employee_new_one)
    //  console.log(`Employee Id:` ,this.employee_new_one.emp_id)
    // console.log(`Employee Name:` ,this.employee_new_one.emp_name)
    // console.log(`Employee Dept:` ,this.employee_new_one.emp_dept)
    // console.log(`Employee Salary:` ,this.employee_new_one.emp_salary)
    // console.log(`Employee Company:` ,this.employee_new_one.emp_company)
  }

}
