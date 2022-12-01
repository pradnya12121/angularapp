import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.css']
})
export class ChildcomponentComponent implements  OnChanges {
@Input() employee;
  constructor() { }
  ngOnChanges(changes:{employee}) : void{
   for(const key in changes){
   const ep2 =changes[key];
   const {preVal,currentVal,firstChange}=ep2
  console.log(changes[key])
  // console.table(`Previous value ${ep2}`);

  // console.log(`current value ${currentVal}`);
  // console.log(`first value ${firstChange}`);


  //getting array of object into change()
  // ngOnChanges(changes:{employee}): void {
  //   for (const element in changes) {
  //        const el=changes[element];
  //        const {preVal,currentVal,firstChange}=el; //object destructuring
  //        console.table(changes[element]); //for observation 
  //   }
  }

  // ngOnInit() {
  // }
  
  }
}
