import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from 'src/app/candeacivateguard.guard';

@Component({
  selector: 'app-reactive-approch',
  templateUrl: './reactive-approch.component.html',
  styleUrls: ['./reactive-approch.component.css']
})
export class ReactiveApprochComponent implements OnInit,CanComponentDeactivate {
  myForm:FormGroup
  nameNotAllowed=['Test']
  constructor() {
    this.createForm()
   }
  
  ngOnInit() {
  }
  createForm(){
    this.myForm =new FormGroup({
      'projectName': new FormControl('',[Validators.required],this.NName),
      'email': new FormControl('',[Validators.required,Validators.email]),
      'status' : new FormControl('Stable')
    })
  }

  // NoName(controls:FormControl){
  //   if(this.nameNotAllowed.indexOf(controls.value) !==-1){
  //     return {'nameNotA' :true}
  //   }
  //   return null;
  // }

NName(control:FormControl) : Promise<any> | Observable<any>{
  const myResponse = new Promise <any>((resolve,reject)=>{
    setTimeout(()=>{
      if(control.value === 'Test'){
        resolve({notA:true})
      }else {
        resolve(null)
      }
    },3000);

  })
  return myResponse

}



  get projectName(){
    return this.myForm.get('projectName')
  }
  get email(){
    return this.myForm.get('email')
  }
  onSubmit(){
    console.log(this.myForm.value)
  }
  CanDeactivate(): Observable<boolean> |boolean{
    if(this.myForm.dirty){
      return confirm("You have unsave changes.Are you sure want to navigate?")
    }
    return true;
  }
  
}
