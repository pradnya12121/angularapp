import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-practice',
  templateUrl: './reactive-practice.component.html',
  styleUrls: ['./reactive-practice.component.css']
})
export class ReactivePracticeComponent implements OnInit {
myForm:FormGroup;
genders=[{id:'1',value:'Female'},{id:'2',value:'Male'}]
nameNotAllowed=['codemind','technology']
  constructor() {
  this.createForm();
   }

  ngOnInit() {
  }
createForm(){
  this.myForm=new FormGroup({
    'myDetails':new FormGroup({
      'username':new FormControl('',[Validators.required,this.NaName.bind(this)]),
      'email': new FormControl('',[Validators.required,Validators.email]), 
    }),

'course': new FormControl('Oracle'),
'gender': new FormControl('Female'),

  })
}

  onSubmit(){
    console.log(this.myForm);
    console.log(this.myForm.value)
  
  }
  NaName(control:FormGroup){
    if(this.nameNotAllowed.indexOf(control.value)!== -1){
return {'notName':true}
    }
return null;
  }
}
