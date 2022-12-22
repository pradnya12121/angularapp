import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mul'
})
export class MulPipe implements PipeTransform {
 num2:number=20;
 num1:number;
  transform(value:number): any {
        this.num1=this.num2*value;
      return  this.num1;
  }

}
