import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-simple-template',
  templateUrl: './simple-template.component.html',
  styleUrls: ['./simple-template.component.css']
})
export class SimpleTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  OnSubmit(form:NgForm){
console.log(form.value)
  }

}
