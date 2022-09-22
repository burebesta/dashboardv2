import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-target-element',
  templateUrl: './target-element.component.html',
  styleUrls: ['./target-element.component.css']
})
export class TargetElementComponent implements OnInit {

  @Input() text!: string
  @Input() color!: string
  @Input() number!: number
  
  constructor() { }



  ngOnInit(): void {
    
  }
 
}

