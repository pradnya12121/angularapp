import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
  userName:string=" ";
  buttonDisable=true;
  onCliskUser(){
     this.userName=" ";
  }
  
  constructor() { }

  ngOnInit() {
  }

}
