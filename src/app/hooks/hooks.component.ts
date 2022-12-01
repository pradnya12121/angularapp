import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit ,OnChanges {
@Input() userid:number;
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
  for(const propName in changes){
     const prop=changes[propName];
     const {previousValue,currentValue,firstChange}=prop;
     console.log(`Prop Name: ${propName}`);
     console.log(`Privious value: ${previousValue}`);
     console.log(`Current value:  ${currentValue}`);
     console.log(`First  value:  ${firstChange}`);
     console.log("--------------------------------------------------------------")
  }
  }

  ngOnInit() {
  }

}
