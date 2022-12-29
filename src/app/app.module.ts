import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { ServerComponent } from 'src/app/server/server.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContentComponent } from './content/content.component';
import { WarningAlert } from './WarningAlert/warnning.component';
import { SucessComponent } from './sucess/sucess.component';
import { ServerComponent } from './server/server.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DemodirectivesComponent } from './demodirectives/demodirectives.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { NgSwitch2Component } from './ng-switch2/ng-switch2.component';
import { AttriComponent } from './attri/attri.component';
import { ConfirmpassComponent } from './confirmpass/confirmpass.component';
import { ConfirmEqualValidatorDirective } from './passd.directive';
import { ChildComponent } from './child/child.component';
import { ChildoutComponent } from './childout/childout.component';
import { HooksComponent } from './hooks/hooks.component';
import { ParentcomponentComponent } from './parentcomponent/parentcomponent.component';
import { ChildcomponentComponent } from './childcomponent/childcomponent.component';
import { DirectiveAssignmentComponent } from './directive-assignment/directive-assignment.component';
import { NewDirectiveAssignComponent } from './new-directive-assign/new-directive-assign.component';
import { SimpleTemplateComponent } from './simple-template/simple-template.component';
import { FormAssignComponent } from './form-assign/form-assign.component';
import { FormAssignmentTwoComponent } from './form-assignment-two/form-assignment-two.component';
import { CosmaticComponent } from './cosmatic/cosmatic.component';
import { CosmaticTwoComponent } from './cosmatic-two/cosmatic-two.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactivePracticeComponent } from './reactive-practice/reactive-practice.component';
import { AssignmentTemplateDrivenComponent } from './assignment-template-driven/assignment-template-driven.component';
import { ReactiveTwoAssinmentComponent } from './reactive-two-assinment/reactive-two-assinment.component';
import { TempPractComponent } from './temp-pract/temp-pract.component';
import { RectComponent } from './rect/rect.component';
import { ServiceComponent1Component } from './service-component1/service-component1.component';
import { ServiceComponent2Component } from './service-component2/service-component2.component';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveApprochComponent } from './Services/reactive-approch/reactive-approch.component';

import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { Comp1Component } from './comp1/comp1.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { CountPipe } from './count.pipe';
import { MulPipe } from './mul.pipe';
import { FiltercomponentComponent } from './filtercomponent/filtercomponent.component';
import { FilterPipePipe } from './filter-pipe.pipe';
import { GenderComponentComponent } from './gender-component/gender-component.component';
import { GenderpipePipe } from './genderpipe.pipe';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { DemopostComponent } from './demopost/demopost.component';
import { DemoDetailsComponent } from './demo-details/demo-details.component';
import { ProductsModule } from './product/products.module';
import { ElectronicModule } from './electronics/electronic.module';





@NgModule({
  declarations: [
    AppComponent,
    // ServerComponent,
    HeaderComponent,
    NavigationComponent,
    ContentComponent,
    WarningAlert,
    SucessComponent,
    ServerComponent,
    DatabindingComponent,
    DemodirectivesComponent,
    NgswitchComponent,
    StructuralDirectivesComponent,
    NgSwitch2Component,
    AttriComponent,
  
    ConfirmpassComponent,
   ConfirmEqualValidatorDirective,
  ChildComponent,
ChildoutComponent,
 HooksComponent,
ParentcomponentComponent,
ChildcomponentComponent,
 DirectiveAssignmentComponent,
NewDirectiveAssignComponent,
  SimpleTemplateComponent,
   FormAssignComponent,
  FormAssignmentTwoComponent,
   CosmaticComponent,
 CosmaticTwoComponent,
  ReactiveFormComponent,
  TemplateDrivenFormComponent,
   ReactivePracticeComponent,
   AssignmentTemplateDrivenComponent,
   ReactiveTwoAssinmentComponent,
   TempPractComponent,
   RectComponent,
   ServiceComponent1Component,
   ServiceComponent2Component,
   ReactiveApprochComponent,
   
   Comp2Component,
   Comp3Component,
   Comp4Component,
   Comp1Component,
   PipedemoComponent,
   CountPipe,
   MulPipe,
   FiltercomponentComponent,
   FilterPipePipe,
   GenderComponentComponent,
   GenderpipePipe,
   AboutusComponent,
   HomeComponent,
  
   ContactusComponent,
   LoginComponent,
   PageNotFoundComponent,
  
   DemopostComponent,
   DemoDetailsComponent,
   
  
    // ServerComponent
  ],
  imports: [

    BrowserModule,
    ElectronicModule,
    ProductsModule,

    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
