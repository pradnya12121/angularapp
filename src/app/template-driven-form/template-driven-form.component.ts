import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
defaultValue:string="Advanced";
kk:boolean=false;
array:any[]=[];
  constructor() { }

  ngOnInit() {
  }
  onSubmit(form:NgForm){
    this.array.push(form.value)
// console.log(form.value)
this.kk=true;

  form.reset()
  }
  
  }


