import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { SIGKILL } from 'constants';

@Component({
  selector: 'app-rect',
  templateUrl: './rect.component.html',
  styleUrls: ['./rect.component.css']
})
export class RectComponent implements OnInit {
myForm:FormGroup;
  constructor() { 
    this.createForm();
  }

  ngOnInit() {
  }
  createForm(){
    this.myForm =new FormGroup({
      'firstname': new FormControl('',[Validators.required,Validators.maxLength(5)]),
      'lastname' : new FormControl('',[Validators.required,Validators.maxLength(10)]),
      'age': new FormControl('',[Validators.required,Validators.min(17),Validators.max(20)]),
      'email' : new FormControl('',[Validators.required,Validators.email]),
      'phone':new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      'skills': new FormArray([
        new FormControl()
      ])
    })
  }
  onAddButton(){
   (<FormArray> this.myForm.get('skills')).push(new FormControl)

  }
   removeButton(i){
      (<FormArray> this.myForm.get('skills')).removeAt(i)
    

  }

  get firstname(){
   return  this.myForm.get('firstname')
  }
  get lastname(){
    return this.myForm.get('lastname')
  }
  get age(){
    return this.myForm.get('age')
  }

  get email(){
    return this.myForm.get('email')
  }
  get phone(){
    return this.myForm.get('phone')
  }
  onSubmit(){
    console.log(this.myForm.value)
  }
}

