import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
myReactiveForm:FormGroup;
genders:any[]=[{id:'1',value:'Female'},{id:'2',value:'Male'}]
notAllowedNames=['codemind','technology']
  constructor() { 
this.createForm();
  }
createForm(){
  this.myReactiveForm=new FormGroup({
    'username':new FormControl('',[Validators.required,this.NaName.bind(this)]),
    'email':new FormControl('',[Validators.required,Validators.email]),
    'course':new FormControl('Angular'),
    'gender':new FormControl('')
  })
}
onSubmit(){
  console.log(this.myReactiveForm);
}
  ngOnInit() {
  }
NaName(controls:FormControl){
if(this.notAllowedNames.indexOf(controls.value)!== -1){
return{'nameNotAllowed':true}
}
return null;
}
}
