import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-likes-individual',
  templateUrl: './likes-individual.component.html',
  styleUrls: ['./likes-individual.component.css']
})
export class LikesIndividualComponent implements OnInit {

  @Input() text!: string
  @Input() color!: string
  @Input() path!: string
  @Input() number!: number

  quantity!:string 
  
  constructor() { }

  

  ngOnInit(): void {
    
  }

}
 