import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AuthGuard } from './auth.guard';
import { CandeacivateguardGuard } from './candeacivateguard.guard';
import { ContactusComponent } from './contactus/contactus.component';
import { DemoDetailsComponent } from './demo-details/demo-details.component';
import { DemopostComponent } from './demopost/demopost.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



import { WashingMachineComponent } from './product/washing-machine/washing-machine.component';
import { ReactiveTwoAssinmentComponent } from './reactive-two-assinment/reactive-two-assinment.component';
import { RegistrationComponent } from './registration/registration.component';
import { RxjsconceptComponent } from './rxjsconcept/rxjsconcept.component';
import { ReactiveApprochComponent } from './Services/reactive-approch/reactive-approch.component';
import { UnSaveGuard } from './un-save.guard';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'aboutus' ,component:AboutusComponent},
{path:'home' ,component: HomeComponent},

{path:'contactus',component:ContactusComponent},
{path:'login' , component:LoginComponent},
{path:'demopost' ,component:DemopostComponent},
{path:'demoDetails/:id', component: DemoDetailsComponent},
{path:'addUser' , canDeactivate:[UnSaveGuard],component: AddUserComponent },
 {path:'reactive-approch' ,canDeactivate:[CandeacivateguardGuard], component:ReactiveApprochComponent},
{path:'reactive-two',canDeactivate:[CandeacivateguardGuard],component:ReactiveTwoAssinmentComponent},
{path:'product', canActivate:[AuthGuard] ,loadChildren:'./product/products.module#ProductsModule'},
{path:'orderlist',loadChildren:'./order/order.module#OrderModule'},
{path:'register' , component:RegistrationComponent},
{path:'rxjsconcept', component:RxjsconceptComponent},


{path:'**', component:PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
