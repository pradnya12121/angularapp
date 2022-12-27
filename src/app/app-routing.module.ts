import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DemoDetailsComponent } from './demo-details/demo-details.component';
import { DemopostComponent } from './demopost/demopost.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { ProductComponent } from './product/product.component';
import { TabletComponent } from './product/tablet/tablet.component';
import { TvComponent } from './product/tv/tv.component';
import { WashingMachineComponent } from './product/washing-machine/washing-machine.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'aboutus' ,component:AboutusComponent},
{path:'home' ,component: HomeComponent},
{path:'product',component:ProductComponent, children:[
  {path:'laptop', component:LaptopComponent},{path:'tv',component:TvComponent },
{path:'tablet', component:TabletComponent},
{path:'washingMachine',component:WashingMachineComponent}]},

{path:'contactus',component:ContactusComponent},
{path:'login' , component:LoginComponent},
{path:'demopost' ,component:DemopostComponent},
{path:'demoDetails/:id', component: DemoDetailsComponent},

{path:'**', component:PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
