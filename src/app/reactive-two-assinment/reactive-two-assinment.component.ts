import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from '../candeacivateguard.guard';
import { userData } from '../models/templatedriven';

@Component({
  selector: 'app-reactive-two-assinment',
  templateUrl: './reactive-two-assinment.component.html',
  styleUrls: ['./reactive-two-assinment.component.css']
})
export class ReactiveTwoAssinmentComponent implements OnInit ,CanComponentDeactivate {
  myFormDetails:FormGroup;

 
  // emailPattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-z]+$)";
  genders=[{id:'1',value:'Female'},{id:'2',value:'Male'}]
  user;
  userTwo:any[]=[];
  constructor() { 
    this.createForm();
  }

  ngOnInit() {
  }
  createForm(){
   
    this.myFormDetails= new FormGroup({
      'firstname': new FormControl('',[Validators.required,Validators.maxLength(5)]),
      'lastname' : new FormControl('',[Validators.required,Validators.maxLength(10)]),
      'age': new FormControl('',[Validators.required,Validators.min(17),Validators.max(20)]),
      'email':new FormControl('',[Validators.required,Validators.email]),
      'phone' : new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      'gender': new FormControl('Female'),
      'city':new FormControl('Mumbai'),
      'password':new FormControl('',Validators.required),
      'confirmPassword': new FormControl('',Validators.required),
     
    })

   
  }
  get firstname(){
    return this.myFormDetails.get('firstname')
  }
  
  get lastname(){
    return this.myFormDetails.get('lastname')
  }
  get age(){
    return this.myFormDetails.get('age')
  }
  get email(){
    return this.myFormDetails.get('email')
  }
  get phone(){
    return this.myFormDetails.get('phone')
  }
  get password(){
    return this.myFormDetails.get('password')
  }
  get confirmPassword(){
    return this.myFormDetails.get('confirmPassword')
  }
  onSubmit(){
console.log(this.myFormDetails)
    this.user=new userData()
this.user.firstname=this.myFormDetails.value.firstname;
this.user.lastname=this.myFormDetails.value.lastname;
this.user.age=this.myFormDetails.value.age;
this.user.email=this.myFormDetails.value.email;
this.user.phone=this.myFormDetails.value.phone;
this.user.city=this.myFormDetails.value.city;
this.user.gender=this.myFormDetails.value.gender;
this.user.password=this.myFormDetails.value.password;
this.user.confirmPassword=this.myFormDetails.value.confirmPassword;
this.userTwo.push(this.user);
console.log(this.myFormDetails.value)


  }

  CanDeactivate(): Observable<boolean> |boolean{
    if(this.myFormDetails.dirty){
      return confirm("You have unsave changes.Are you sure want to navigate?")
    }
    return true;
  }
}
