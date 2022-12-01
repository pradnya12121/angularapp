import { Component } from '@angular/core';
import { Employee } from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'angularapp';
  // username='this is from parent';
  uid:number;

  foods: string[] = [];
  collegep:any[]=[];

  constructor(){
    // this.employees.emp_id=101;
    // this.employees.emp_name="Pranisha Babar";
    // this.employees.emp_dept="Finance",
    // this.employees.emp_salary=40000;
    // this.employees.emp_company="LNT"
}
// employees:Employee=new Employee();
// employees_one:Employee[]=[
//   {emp_id:101,emp_name:"Pranisha",emp_dept:"IT",emp_salary:40000,emp_company:"TCS"},
//   {emp_id:102,emp_name:"Pramod",emp_dept:"Finance",emp_salary:50000,emp_company:"LNT"},
//   {emp_id:103,emp_name:"Pramila",emp_dept:"HR",emp_salary:60000,emp_company:"WIPRO"},
//   {emp_id:104,emp_name:"Avinash",emp_dept:"IT",emp_salary:70000,emp_company:"TCS"},
//   {emp_id:105,emp_name:"Ananya",emp_dept:"Finance",emp_salary:40000,emp_company:"CAPGIMINY"},
//   {emp_id:106,emp_name:"Aarav",emp_dept:"HR",emp_salary:50000,emp_company:"TCS"}
// ]

ngOnInit() {
}

  
getDataFromChild(value) {
  console.log(value);
  this.foods.push(value);
}

getDataFromChildO(value){
  console.log(value)
  this.collegep=value;

}



}
