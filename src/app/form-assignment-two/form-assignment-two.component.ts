import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentDetails } from '../models/studentRegi';

@Component({
  selector: 'app-form-assignment-two',
  templateUrl: './form-assignment-two.component.html',
  styleUrls: ['./form-assignment-two.component.css']
})
export class FormAssignmentTwoComponent implements OnInit {
defaultValue:string="Cosmos"
defaultValue_two:string="Electronics & Telecommunication";

studentDetails1=new StudentDetails();
  constructor() { }

  ngOnInit() {
  }
  OnSubmit(form:NgForm){
this.studentDetails1.name=form.value.studentDetails.username;
this.studentDetails1.date=form.value.studentDetails.date;
this.studentDetails1.Gender=form.value.studentDetails.Gender;
this.studentDetails1.email=form.value.email;
this.studentDetails1.address=form.value.address;
this.studentDetails1.dept=form.value.dept;
this.studentDetails1.school=form.value.school;
this.studentDetails1.mobile=form.value.mobile;
this.saveStudentData(this.studentDetails1)
  }

  saveStudentData(stu:StudentDetails){
    console.log(stu.name);
    console.log(stu.date);
    console.log(stu.Gender);
    console.log(stu.email);
    console.log(stu.address);
    console.log(stu.dept);
    console.log(stu.school);
    console.log(stu.mobile)

  }
}



