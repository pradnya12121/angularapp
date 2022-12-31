import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RapidserviceService } from '../Services/rapidservice.service';

@Component({
  selector: 'app-rapid',
  templateUrl: './rapid.component.html',
  styleUrls: ['./rapid.component.css']
})
export class RapidComponent implements OnInit {

  constructor(private rapid:RapidserviceService) { }
array:any[]=[];
 array_one;
// array_two;
  ngOnInit() {
    this.rapid.getDataBFinance().subscribe(result =>{
      console.log(`data come from rapiapi` + result)
    
       this.array=result.news;
       this.array_one=result.quote
       console.log(this.array_one)
      
  
    
    
    
    
  
      
    })
  }

}
