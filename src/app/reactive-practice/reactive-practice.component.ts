import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { promise } from 'protractor';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-practice',
  templateUrl: './reactive-practice.component.html',
  styleUrls: ['./reactive-practice.component.css']
})
export class ReactivePracticeComponent implements OnInit {
myForm:FormGroup;
genders=[{id:'1', value:'Female'},{id:'2', value:'Male'}]
nameNotAllowed=['codemind', 'technology'];

  constructor() {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm(){
    this.myForm = new FormGroup({
      'userDetails':new FormGroup({
     
        'username' : new FormControl('',[Validators.required,  this.NaName.bind(this)]),
        'email': new FormControl('',[Validators.required,Validators.email, this.NoEmails]),
      }),
      'gender': new FormControl('Female'),
      'course':new FormControl('Javascript')
    })

 
  }
  NaName(control:FormControl){
if(this.nameNotAllowed.indexOf(control.value)!==-1){
  return  {'nameNot':true}
}
return null;
  }

  onSubmit(){
    console.log(this.myForm)

        }
  NoEmails(control:FormGroup) : Promise<any> |Observable<any>{
    const promise = new  Promise((resolve,reject)=>{
      setTimeout(()=>{
         if(control.value === 'codemindtechnology@gmail.com'){
          resolve({'emailNot' :true})
         }else
         {
          resolve(null)
         }
        
      },3000)
    })
    return promise;
  }

  
}
