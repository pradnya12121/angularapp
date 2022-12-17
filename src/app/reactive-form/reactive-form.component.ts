import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

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
  'userDetails':new FormGroup(
    { 
       'username':new FormControl('',[Validators.required,this.NaName.bind(this)]),
    'email':new FormControl('',[Validators.required,Validators.email,this.NaEmails]),
  }),
    'course':new FormControl('Angular'),
    'gender':new FormControl(''),
    'skills':new FormArray([
      new FormControl(null)
    ])
  })
}
onAddSkills(){
  (<FormArray>this.myReactiveForm.get('skills')).push(new FormControl(null))
}
onSubmit(){
  console.log(this.myReactiveForm);
}
  ngOnInit() {


    //  setTimeout(() => {
    //      this.myReactiveForm.setValue({
    //       'userDetails' : {
    //         'username': 'Codemind1122',
    //        'email': 'test@gmail.com'
    //      },
    //       'course': 'HTML',
    //      'gender': 'Male'
    //     })
    //  }, 3500);
  



    setTimeout(() => {
      this.myReactiveForm.patchValue({
        'userDetails' : {
          'username': 'Codemind1122',
          'email': 'test@gmail.com'
        }
      })
    }, 3500);

  }
NaName(controls:FormControl){
if(this.notAllowedNames.indexOf(controls.value)!== -1){
return{'nameNotAllowed':true}
}
return null;
}

NaEmails(control:FormControl): Promise<any> | Observable<any> {
  const myResponse = new Promise<any>((resolve, reject) => {
    setTimeout(() => {
      if(control.value === 'codemindtechnology@gmail.com'){
        resolve({'emailNotAllowed': true})
      } else {
        resolve(null)
      }
    }, 3000);
  })
  return myResponse;
}

}
