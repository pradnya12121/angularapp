import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomDir]'
})
export class CustomDirDirective {

  constructor(private el:ElementRef , private render:Renderer2) { 
     // el.nativeElement.style.backgroundColor='Red';
     render.setStyle(el.nativeElement,'backgroundColor','red')
    
    }
  }


