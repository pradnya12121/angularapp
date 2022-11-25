import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
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
    // ServerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
