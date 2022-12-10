import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../models/emp';


@Component({
  selector: 'app-simple-template',
  templateUrl: './simple-template.component.html',
  styleUrls: ['./simple-template.component.css']
})
export class SimpleTemplateComponent implements OnInit {
  defaultValue:string="Angular"
  defaultGender:string="Female"
  employee = new Employee();
  submitted: boolean = false;
  genders=[{id:'1',value:'Female'},
{id:'2',value:'Male'}]
OnSubmit(form:NgForm) {
    this.submitted = true;
    this.employee .coursees = form.value.course;
    this.employee .username = form.value.userDetails.username;
    this.employee .email = form.value.userDetails.email;
    this.employee.gender=form.value.gender;
    form.reset();
    form.controls['course'].setValue("Angular");
    form.controls['gender'].setValue("Female")
    

   this.saveEmployeeData(this.employee);
  }

  saveEmployeeData(emp:Employee) {
   console.log(emp.coursees);
  }

  constructor() { }

  ngOnInit() {
  }


}
