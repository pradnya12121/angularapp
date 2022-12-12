import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
myReactiveForm:FormGroup;
  constructor() { 
this.createForm();
  }
createForm(){
  this.myReactiveForm=new FormGroup({
    'username':new FormControl('',Validators.required),
    'email':new FormControl('',Validators.required)
  })
}
onSubmit(){
  console.log(this.myReactiveForm);
}
  ngOnInit() {
  }

}
