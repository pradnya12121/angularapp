import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-assign',
  templateUrl: './form-assign.component.html',
  styleUrls: ['./form-assign.component.css']
})
export class FormAssignComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  OnSubmit(form:NgForm){
    console.log(form.value)
      }

}
