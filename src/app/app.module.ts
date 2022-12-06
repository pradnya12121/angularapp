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
import { CustomDirDirective } from './custom-dir.directive';
import { ConfirmpassComponent } from './confirmpass/confirmpass.component';
import { ConfirmEqualValidatorDirective } from './passd.directive';
import { ChildComponent } from './child/child.component';
import { ChildoutComponent } from './childout/childout.component';
import { HooksComponent } from './hooks/hooks.component';
import { ParentcomponentComponent } from './parentcomponent/parentcomponent.component';
import { ChildcomponentComponent } from './childcomponent/childcomponent.component';
import { DirectiveAssignmentComponent } from './directive-assignment/directive-assignment.component';
import { NewDirectiveAssignComponent } from './new-directive-assign/new-directive-assign.component';

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
    CustomDirDirective,
    ConfirmpassComponent,
  
    ConfirmEqualValidatorDirective,
  
    
  
    ChildComponent,
  
    
  
    ChildoutComponent,
  
    
  
    HooksComponent,
  
    
  
    ParentcomponentComponent,
  
    
  
    ChildcomponentComponent,
  
    
  
    DirectiveAssignmentComponent,
  
    
  
    NewDirectiveAssignComponent,
  
    
  
  
  
    
  
    // ServerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
