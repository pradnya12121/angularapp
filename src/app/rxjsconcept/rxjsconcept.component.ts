import { ReadKeyExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { from, interval } from 'rxjs';
import { filter, map, takeLast, toArray } from 'rxjs/operators'
import { RxjsServiceService } from '../Services/rxjs-service.service';

@Component({
  selector: 'app-rxjsconcept',
  templateUrl: './rxjsconcept.component.html',
  styleUrls: ['./rxjsconcept.component.css']
})
export class RxjsconceptComponent implements OnInit {

  constructor(private rxjs:RxjsServiceService) { }
userInfo;
  ngOnInit() {
    console.log("============================from method===================")
    this.userInfo=from(this.rxjs.user).subscribe(result =>{
      console.log(`data come from user object:` , result)
    })
    console.log("=============================filter opreator===============")
     
    this.userInfo=from(this.rxjs.user).pipe(
filter(data => data.gender=='male'),
toArray()//it will separate into  array.
).subscribe(result =>{
  console.log(`data from filter opreator` , result)
})
console.log("==========take last opreator====================")
let array_new:any[]=['Javascript', 'Html','Css']
const source= from(array_new);
source.pipe(
  takeLast(2)
).subscribe(result =>{
  console.log('Result come from takeLast operator', result)
})

console.log("==============================================")

// const source1= interval(5);
// source1.subscribe(res =>{
//   console.log(`interval opreator` , res)
// })




    


  
  
  }
  
  
  }
