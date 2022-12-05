import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-assignment',
  templateUrl: './directive-assignment.component.html',
  styleUrls: ['./directive-assignment.component.css']
})
export class DirectiveAssignmentComponent implements OnInit {
  show:boolean=true;
 arr:any[]=[];
  constructor() { }
  
  ngOnInit() {
  }
  toggleMe(){
    this.show=!this.show
    this.arr.push(this.arr.length+1)
  }

}
