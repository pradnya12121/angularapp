import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { userData } from '../models/templatedriven';
import { userDetails } from '../models/userDetails';

@Component({
  selector: 'app-assignment-template-driven',
  templateUrl: './assignment-template-driven.component.html',
  styleUrls: ['./assignment-template-driven.component.css']
})
export class AssignmentTemplateDrivenComponent implements OnInit {

  firstname:any;
  lastname:any;
  age:number;
  phone:number;
  defaultValue='Mumbai';
  confirmPassword:any;
  password:any;
  genders=[{id:'1',value:'Female'},{id:'2', value:'Male'}]
  defaultGender='Female';
  userData;
  userTwo:any[]=[];
  constructor() { }

  ngOnInit() {
  }
  OnSubmit(form:NgForm){
    this.userData=new userData();
    this.userData.firstname=form.value.userDetails.firstname;
    this.userData.lastname=form.value.userDetails.lastname;
    this.userData.age=form.value.age;
    this.userData.email=form.value.email;
    this.userData.phone=form.value.phone;
    this.userData.city=form.value.city;
    this.userData.gender=form.value.gender;
    this.userData.password=form.value.password;
    this.userData.confirmPassword=form.value.confirmPassword;
    this.userTwo.push(this.userData);
    console.log(form.value)



  }

}
