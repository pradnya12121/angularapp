import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaptopComponent } from './laptop/laptop.component';
import { TvComponent } from './tv/tv.component';
import { TabletComponent } from './tablet/tablet.component';
import { WashingMachineComponent } from './washing-machine/washing-machine.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { UtilityModule } from '../models/utility.module';



const Productroutes: Routes =     [{path:'',component:ProductComponent, children:[
  {path:'laptop', component:LaptopComponent},{path:'tv',component:TvComponent },
{path:'tablet', component:TabletComponent},
{path:'washingMachine',component:WashingMachineComponent}]}]


@NgModule({
  declarations: [
    ProductComponent,
    LaptopComponent,
   TvComponent,
   TabletComponent,
   WashingMachineComponent,
   
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(Productroutes),
    UtilityModule 
  ],
  exports:[
    RouterModule,
     
  ]
})
export class ProductsModule {
constructor(){
  console.log("product Module call")
}
 }
