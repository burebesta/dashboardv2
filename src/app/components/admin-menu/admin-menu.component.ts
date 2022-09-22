import { Component, OnInit } from '@angular/core';
import {menu} from './menu-items'
import { Store } from '@ngrx/store';
import { menuStatus } from 'src/app/store/store-selectors';
import { hideMenu } from 'src/app/store/store-actions';
import { userCredentials } from 'src/app/store/user-store/user-selectors'
import { Observable } from 'rxjs'



@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit {

  menu = menu
  email?:string
  showMenu?: boolean
  
  constructor(private store: Store)
  { this.store.select(menuStatus).subscribe(value=>{
    this.showMenu = value.show })}

  hideMenu(){
    this.store.dispatch(hideMenu())
  }

  ngOnInit(): void {
    this.store.select(userCredentials).subscribe(value=>this.email=value.email)
  }


}
