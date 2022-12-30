import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanComponentDeactivate{
  CanDeactivate:()=>Observable<boolean> | Promise<boolean> | boolean;
}
@Injectable({
  providedIn: 'root'
})

export class CandeacivateguardGuard implements CanDeactivate <CanComponentDeactivate> {
  canDeactivate(component: CanComponentDeactivate, 
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot){
      return component.CanDeactivate ? component.CanDeactivate() :true;
    }
  }


  

