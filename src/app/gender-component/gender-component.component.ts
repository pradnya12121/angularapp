import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/empgender';

@Component({
  selector: 'app-gender-component',
  templateUrl: './gender-component.component.html',
  styleUrls: ['./gender-component.component.css']
})
export class GenderComponentComponent implements OnInit {




  
  employee:Employee[]=[{id:1,name:'Nikita',dept:'IT',salary:30000,gender:'Female',dob:'10-12-1996'},
  {id:2,name:'Rohan',dept:'Finance',salary:40000,gender:'Male',dob:'16-08-1994'},
  {id:3,name:'Urmila',dept:'HR',salary:50000,gender:'Female',dob:'27-11-1998'},
  {id:4,name:'Pramila',dept:'IT',salary:60000,gender:'Female',dob:'23-09-1996'},
  {id:5,name:'Om',dept:'IT',salary:70000,gender:'Male',dob:'9-12-1999'},
  {id:6,name:'Namrata',dept:'HR',salary:78000,gender:'Female',dob:'10-6-2000'},
  {id:7,name:'Pramod',dept:'Finance',salary:30000,gender:'Male',dob:'13-12-1997'}]
  constructor() { }

  ngOnInit() {
  }

}
