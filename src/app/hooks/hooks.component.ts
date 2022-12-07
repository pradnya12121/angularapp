import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit ,OnChanges,DoCheck,AfterContentInit,AfterContentChecked ,AfterViewInit,AfterViewChecked, OnDestroy{
@Input() userid:number;
@Input() parentData:string;
@Input() product:object;
@ContentChild("child", {static:false}) contentChild:ElementRef;
@ViewChild("childhook", {static:false}) viewChild:ElementRef;
 counter;
 num:number=1;
  constructor() { }
  ngOnDestroy(): void {
    console.log("ng Destroy")
    clearInterval(this.counter)
   
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked()")
    this.viewChild.nativeElement.setAttribute('style' , `color: ${this.parentData}`)
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit()");
    this.viewChild.nativeElement.setAttribute('style' , `color:pink`)
  }
  ngAfterContentChecked(): void {
  console.log("ngAfterContentChecked call")
  // this.contentChild.nativeElement.setAttribute('style', `color:${this.parentData}`)
  }
  ngDoCheck(): void {
    console.log("ngDocheck")
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentenInit() call")
  this.contentChild.nativeElement.setAttribute('style', 'color:green')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnchanges Call")
  //   console.log(this.parentData)
  // for(const propName in changes){
  //    const prop=changes[propName];
  //    const {previousValue,currentValue,firstChange}=prop;
  //    console.log(`Prop Name: ${propName}`);
  //    console.log(`Privious value: ${previousValue}`);
  //    console.log(`Current value:  ${currentValue}`);
  //    console.log(`First  value:  ${firstChange}`);
  //    console.log("--------------------------------------------------------------")
  // }
  }

  ngOnInit() {
    console.log("ngOnIt call")
    this.counter=setInterval(()=>{
      this.num=this.num+1;
      console.log(this.num)
    },1000)
  }

}
