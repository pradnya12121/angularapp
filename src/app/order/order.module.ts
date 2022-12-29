import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { OrderroutingRoutingModule } from './orderrouting/orderrouting-routing.module';



@NgModule({
  declarations: [OrderlistComponent],
  imports: [
    CommonModule,
    OrderroutingRoutingModule
  ]
})
export class OrderModule {
  constructor(){
    console.log("order module call")
  }
 }
