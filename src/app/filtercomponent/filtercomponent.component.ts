import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtercomponent',
  templateUrl: './filtercomponent.component.html',
  styleUrls: ['./filtercomponent.component.css']
})
export class FiltercomponentComponent implements OnInit {
nameSearch:string='';
  constructor() { }
  product:any[]=[{sno:1,name:'Mobile',price:20000,availability:'Available'},
  {sno:2,name:'TV',price:20000,availability:'Available'},
  {sno:3,name:'Tab',price:30000,availability:'Available'},
  {sno:4,name:'Washing Machine',price:60000,availability:'Not-Available'},]

  ngOnInit() {
  }

}
