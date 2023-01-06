import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-re-p',
  templateUrl: './re-p.component.html',
  styleUrls: ['./re-p.component.css']
})
export class RePComponent implements OnInit {
myForm:FormGroup;
array:any[]=[{id:1,value:'Female'},
{id:2,value:'Male'}]
  constructor() { 
    this.createForm();
  }

  ngOnInit() {
  }
  createForm(){
    this.myForm=new FormGroup({
     'username':new FormControl('',[Validators.required]),
     'email' : new FormControl('',[Validators.required]),
     'gender': new FormControl(''),
     'course': new FormControl('Angular')

    })
  }
  get username(){
    return this.myForm.get('username')
  }

  get email(){
    return this.myForm.get('email')
  }
}
