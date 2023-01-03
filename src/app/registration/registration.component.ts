import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { userData } from '../models/templatedriven';
import { FireService } from '../Services/fire.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
myForm:FormGroup;
  constructor(private fire:FireService) {
    this.createForm()

   }
studentData:userData;
  ngOnInit() {
    this.fire.getDataFire().subscribe(result =>{
      console.log(`get result from only fire`,result)
    })
  }
  createForm(){
  this.myForm = new FormGroup({
    'firstname':new FormControl('',[Validators.required]),
    'lastname' : new FormControl('',[Validators.required]),
    'email':new FormControl('',Validators.required,),
    'phone' : new FormControl('',[Validators.required]),
    'age': new FormControl('',[Validators.required]),
    'gender': new FormControl('Female'),
    'city': new FormControl('Mumbai'),
    'password': new FormControl('',[Validators.required]),
    'confirmPassword': new FormControl('',[Validators.required])

  })
 
  }
get firstname(){
  return this.myForm.get('firstname')
}
get lastname(){
  return this.myForm.get('lastname')
}
get email(){
  return this.myForm.get('email')
}

get phone(){
  return this.myForm.get('phone')
}
get age(){
  return this.myForm.get('age')
}
get password(){
  return this.myForm.get('password')
}
get confirmPassword(){
  return this.myForm.get('confirmPassword')
}
  
onSubmit(){
  console.log(`form Details` , this.myForm)
  console.log(this.myForm.value.firstname)
  this.studentData = new userData();
  this.studentData.firstname=this.myForm.value.firstname;
  this.studentData.lastname=this.myForm.value.lastname;
  this.studentData.email=this.myForm.value.email;
  this.studentData.phone=this.myForm.value.phone;
  this.studentData.age=this.myForm.value.age;
  this.studentData.gender=this.myForm.value.gender;
  this.studentData.city=this.myForm.value.city;
  this.studentData.password=this.myForm.value.password;
  this.studentData.confirmPassword=this.myForm.value.confirmPassword;
  this.fire.postFireData(this.studentData).subscribe(result =>{
    console.log(result)
  })





  }
}
