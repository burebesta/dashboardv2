import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { userCredentials } from 'src/app/store/user-store/user-selectors'
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(private store: Store) { store.select(userCredentials).subscribe(value=>{
    this.isLogged = value.isLogged
  }) }


  isLogged?: boolean

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if (this.isLogged === true) {
      return true
    }
    else return false
  }


}
