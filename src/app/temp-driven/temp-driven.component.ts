import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Student } from '../models/tem';

@Component({
  selector: 'app-temp-driven',
  templateUrl: './temp-driven.component.html',
  styleUrls: ['./temp-driven.component.css']
})
export class TempDrivenComponent implements OnInit {
username:string;
lastname:string;
email:any;
password:any;
confirmPassword:any;
  constructor() { }
  student:Student=new Student()
  isShow=false;
  ngOnInit() {
  }
  onSubmit(form:NgForm){
    this.isShow=true
    this.student.username=form.value.username;
    this.student.lastname=form.value.lastname;
    this.student.email=form.value.email;
    this.student.password=form.value.password;
    this.student.confirmPassword=form.value.confirmPassword;
    form.reset();
    form.controls['lastname'].setValue("Kolase");
  }

}
