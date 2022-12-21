import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityServiceService {
//  userName = new Subject<any>();
//  userName = new BehaviorSubject<any>('Angular  UI Developer')
product = new Subject<any>();
 
  constructor() { }
}
