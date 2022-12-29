import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElectronicsComponent } from './electronics.component';
import { RefrigeratorComponent } from './refrigerator/refrigerator.component';
import { KettleComponent } from './kettle/kettle.component';
import { AcComponent } from './ac/ac.component';
import { RouterModule, Routes } from '@angular/router';

    
 const elctRoutes:Routes=[{path:'electronics',component:ElectronicsComponent,
 children:[
  {path:'refrigerator', component:RefrigeratorComponent},
  {path:'kettle', component:KettleComponent},
  {path:'ac',component: AcComponent}

]




},]

@NgModule({
  declarations: [
    ElectronicsComponent,
   RefrigeratorComponent,
   KettleComponent,
   AcComponent,
   
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(elctRoutes)
  ],
  exports:[
    RouterModule,
  ]
})
export class ElectronicModule { }
