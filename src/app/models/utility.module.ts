import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDirDirective } from '../custom-dir.directive';



@NgModule({
  declarations: [
    CustomDirDirective,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CustomDirDirective
  ]
})
export class UtilityModule { }
