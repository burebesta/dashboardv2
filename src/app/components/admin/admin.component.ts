import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { menuStatus } from 'src/app/store/store-selectors';
import { menuState } from 'src/app/store/store.reducer';
import {Observable} from 'rxjs'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  toggleValue: Observable<menuState>
  
  constructor(private store: Store) 
  { this.toggleValue=this.store.select(menuStatus)}

  ngOnInit(): void {
  }

}
