import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-temp-pract',
  templateUrl: './temp-pract.component.html',
  styleUrls: ['./temp-pract.component.css']
})
export class TempPractComponent implements OnInit {
firstname:string;
lastname:string;
age:number;
phone:number;
password:any;
confirmPassword:any;
defaultValue="Angular";
defaultGender="female";
genders=[{id:'1',value:'female'},{id:'2',value:'male'}]
  constructor() { }

  ngOnInit() {
  }
  onSubmit(form:NgForm){
 console.log(form.value)
  }

}
