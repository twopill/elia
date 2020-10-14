import { Component } from '@angular/core';
import AOS from 'aos';
import { faCodeBranch, faAngry } from '@fortawesome/free-solid-svg-icons';
import { faAdjust } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  constructor() { }

  ngOnInit() {
    AOS.init();
  }


}
