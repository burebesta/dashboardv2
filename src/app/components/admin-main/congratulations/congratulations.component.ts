import { Component, OnInit } from '@angular/core';
import { userCredentials } from 'src/app/store/user-store/user-selectors';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-congratulations',
  templateUrl: './congratulations.component.html',
  styleUrls: ['./congratulations.component.css']
})
export class CongratulationsComponent implements OnInit {

  email:string = ''

  constructor(private store: Store) { 
  }

  ngOnInit(): void {
    this.store.select(userCredentials).subscribe(data=>this.email=data.email)
  }
 

}