import { Component } from '@angular/core';
import { Employee } from './models/employee';
import { Product } from './models/product';
import { Demoservice2Service } from './Services/demoservice2.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'angularapp';
  // username='this is from parent';
  uid:number;
data;
name:string;
price:number;
  foods: string[] = [];
  collegep:any[]=[];
product:Product=new Product();
isShow:boolean=true;
  constructor(private demo2:Demoservice2Service){
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
handleData(value){
this.data=value.target.value;
console.log(this.data)
}
updateProduct(){
  this.product.name=this.name;
  this.product.price=this.price
}
destroy(){
  this.isShow=false;
}

deleteData(){
this.demo2.deletePostById(1).subscribe(result =>{
  console.log(`data come from service` + result)
})
}


}
