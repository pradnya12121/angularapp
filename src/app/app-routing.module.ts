import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DemoDetailsComponent } from './demo-details/demo-details.component';
import { DemopostComponent } from './demopost/demopost.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



import { WashingMachineComponent } from './product/washing-machine/washing-machine.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'aboutus' ,component:AboutusComponent},
{path:'home' ,component: HomeComponent},

{path:'contactus',component:ContactusComponent},
{path:'login' , component:LoginComponent},
{path:'demopost' ,component:DemopostComponent},
{path:'demoDetails/:id', component: DemoDetailsComponent},
{path:'product', loadChildren:'./product/products.module#ProductsModule'},
{path:'orderlist',loadChildren:'./order/order.module#OrderModule'},


{path:'**', component:PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
