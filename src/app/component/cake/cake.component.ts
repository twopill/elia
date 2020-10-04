import { Component, Input, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.scss']
})
export class CakeComponent implements OnInit {

  @Input('experience') experience:[];

  constructor() { }
  
  ngOnInit(){
    AOS.init();
  }

}
