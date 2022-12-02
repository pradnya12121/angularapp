import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-directive-assign',
  templateUrl: './new-directive-assign.component.html',
  styleUrls: ['./new-directive-assign.component.css']
})
export class NewDirectiveAssignComponent implements OnInit {
  name:string;
  
  arr:any[]=[];
  constructor() { }

  ngOnInit() {
  }
  addData(item){
    this.arr.push({name:item})
    
    
  }
  removeRow(i){
    this.arr.splice(i,1)
    }
  }


