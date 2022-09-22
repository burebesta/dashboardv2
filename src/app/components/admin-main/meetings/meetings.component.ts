import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadUsers } from 'src/app/store/random-user-store/random-user.actions';
import {randomUserGeneratorService} from 'src/app/services/random-user-generator.service'
import {randomUser} from 'src/app/store/random-user-store/random-user.selectors'


@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.css']
})
export class MeetingsComponent implements OnInit {

  constructor(private store: Store,
      private service: randomUserGeneratorService
    ) {
    
  }
  users$: any;
  
  ngOnInit() {
    this.store.dispatch(loadUsers({count:3}))
     this.store.select<any>(randomUser).subscribe((value=>this.users$ = value))
  }

}
