import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-re-p',
  templateUrl: './re-p.component.html',
  styleUrls: ['./re-p.component.css']
})
export class RePComponent implements OnInit {
myForm:FormGroup;
array:any[]=[{id:1,value:'Female'},
{id:2,value:'Male'}]
nameNotAlloed=['codemind','technology']
  constructor() { 
    this.createForm();
  }

  ngOnInit() {
    // setTimeout(()=>{
    //   this.myForm.setValue({
    //     'username':'Pradnya',
    //     'email' :'pradnya.kolase1994@gmail.com',
    //     'gender':'Female',
    //     'course':'Angular',
    //     'password':'123',
    //     'confirmPassword':'123'
    //   })
    // },2000)
    // this.myForm.patchValue({
    //   'username':'Pradnya'
    // })
    
  }
  createForm(){
    this.myForm=new FormGroup({
     'username':new FormControl('',[Validators.required,Validators.maxLength(10), this.nName.bind(this)]),
     'email' : new FormControl('',[Validators.required],this.Nemails),
     'gender': new FormControl('Female'),
     'course': new FormControl('Angular'),
     'password':new FormControl('',[Validators.required,Validators.min(10)]),
     'confirmPassword': new FormControl('',[Validators.required,Validators.min(10)]),
     'skills':new FormArray([
      new FormControl(null,Validators.required)
     ])

    })
  }
  nName(controls:FormControl){
    if(this.nameNotAlloed.indexOf(controls.value)!==-1){
      return {'nameNotAllowed':true}
    }
    return null;

  }
  get username(){
    return this.myForm.get('username')
  }

  get email(){
    return this.myForm.get('email')
  }
  get gender(){
    return this.myForm.get('gender')
  }
  get password(){
    return this.myForm.get('password') }
 get confirmPassword(){
   return this.myForm.get('confirmPassword')
  }
  onSubmit(){
    console.log(this.myForm.value)
  }
  Nemails(controls:FormControl):Promise <any> | Observable <any>{
    const myPromise= new Promise((resolve,reject)=>{
      if(controls.value === 'codemind@gmail.com'){
       resolve({'emailNot':true})
      }
      else {
       resolve(null)
      }

    })
    return myPromise;
  }

  // addSkills(){
  //   (<FormArray>this.myForm.get('skills').push(new FormControl(null,Validators.required)))
  // }
}

