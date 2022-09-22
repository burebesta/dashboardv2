import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {loadTargetsNumbers} from 'src/app/store/random-number-store/random-number-actions'
import {selectNumbers} from 'src/app/store/random-number-store/random-number-selector'


@Component({
  selector: 'app-targets',
  templateUrl: './targets.component.html',
  styleUrls: ['./targets.component.css']
})
export class TargetsComponent implements OnInit {

  numberList:any

  constructor(private store:Store) { }

  ngOnInit(): void {
    this.store.dispatch(loadTargetsNumbers({lowNumber:'50',highNumber:'90',count:'3'}))
    this.numberList = this.store.select<any>(selectNumbers).subscribe(value=>this.numberList = value.targetsNumbers)
  }

  dataArray= [
    ['Views','var(--color-blue)'],
    ['Followers','var(--color-yellow)'],
    ['Income','var(--color-red']
  ] 
}
