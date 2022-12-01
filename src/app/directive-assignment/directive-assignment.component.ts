import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-assignment',
  templateUrl: './directive-assignment.component.html',
  styleUrls: ['./directive-assignment.component.css']
})
export class DirectiveAssignmentComponent implements OnInit {
  showMe:boolean=true;
  array:number[]=[];
  count=0;
  constructor() { }
  toggleTag(){
    this.showMe=!this.showMe;
    this.count=this.count+1;
    this.array.push(this.count)
  
  } 
  ngOnInit() {
  }

}
