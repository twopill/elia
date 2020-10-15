import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent implements OnInit {

  name:any;

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

  controllAndSub($event){
    console.log($event);
  }

}
