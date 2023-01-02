import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../Services/firebase.service';
import { RapidserviceService } from '../Services/rapidservice.service';

@Component({
  selector: 'app-rapid',
  templateUrl: './rapid.component.html',
  styleUrls: ['./rapid.component.css']
})
export class RapidComponent implements OnInit {

  constructor(private rapid:RapidserviceService,private firebase:FirebaseService) { }
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
  sendData(){
    this.firebase.createPost().subscribe(result =>{
      console.log(`data come from firebase`, result)
    })

  }

}
