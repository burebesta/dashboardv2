import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { showMenu } from 'src/app/store/store-actions';
import { resizeWindow } from 'src/app/store/store-actions';
import { menuStatus } from 'src/app/store/store-selectors';
import {userLogOut} from 'src/app/store/user-store/user-action'

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  menuStatus:any
  numbers:any
  windowWidth?:number

  constructor(private router: Router,
    private store: Store) {}

  ngOnInit(): void {
    this.menuStatus=this.store.select(menuStatus)
    this.store.select(menuStatus).subscribe(value=>{
      this.windowWidth = value.number
    })
  }

  showMenu(){
    this.store.dispatch(showMenu())
  }

  onResize(){
    let width = window.innerWidth
    this.store.dispatch(resizeWindow({number: width}))
  }

  logOut(){
    this.store.dispatch(userLogOut())
    this.router.navigate(['/']);
  }
}
