import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderpipe'
})
export class GenderpipePipe implements PipeTransform {
   text1='Miss.';
   text2='Mr.';
  transform(value: string, gender: string):string {
        if(gender=='Female'){
          return this.text1+value;
        }else{
          return  this.text2+value;
        }


        }
  }


