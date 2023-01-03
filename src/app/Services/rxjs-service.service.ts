import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RxjsServiceService {

  constructor() { }
  user:any[]=[{id:1,name:'Jack',gender:'male'} ,{id:2,name:'Henry' ,gender:'female'} , {id:3,name:'Potter' , gender:'male'}];
}
