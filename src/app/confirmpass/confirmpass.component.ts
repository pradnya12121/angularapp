import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-confirmpass',
  templateUrl: './confirmpass.component.html',
  styleUrls: ['./confirmpass.component.css']
})
export class ConfirmpassComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }
  title = 'reactive-form-validation-in-angular8'
  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      
      password: ['', [Validators.required,Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      tnc: ['', Validators.required]
     });


  }
  get fval() {
    return this.registerForm.controls;
    }
    //this.user.fullName='';
    signup(){
    this.submitted = true;
    if (this.registerForm.invalid) {
    return;
    }
    alert('form fields are validated successfully!');
    }

}

