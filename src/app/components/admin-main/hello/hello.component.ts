import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { userCredentials } from 'src/app/store/user-store/user-selectors'

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  constructor(private store : Store) {
  }
  email: string = ''
  ngOnInit(): void {
    this.store.select(userCredentials).subscribe(data=>this.email=data.email)
    
  }

}
