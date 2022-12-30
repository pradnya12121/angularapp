import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AddUserComponent } from './add-user/add-user.component';

@Injectable({
  providedIn: 'root'
})
export class UnSaveGuard implements CanDeactivate<AddUserComponent> {
  canDeactivate(component: AddUserComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(component.username.dirty){
      return window.confirm("You have unsaved changes.Are you sure want to navigate?")
    }

  }
  }
 

