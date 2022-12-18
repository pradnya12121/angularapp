import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rect',
  templateUrl: './rect.component.html',
  styleUrls: ['./rect.component.css']
})
export class RectComponent implements OnInit {
myForm:FormGroup;
  constructor() { 
    this.createForm();
  }

  ngOnInit() {
  }
  createForm(){
    this.myForm =new FormGroup({
      'firstname': new FormControl('',[Validators.required,Validators.maxLength(5)])
    })
  }
  get firstname(){
   return  this.myForm.get('firstname')
  }

}
