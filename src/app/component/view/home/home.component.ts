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

  faCodeBranch = faCodeBranch;
  faAdjust = faAdjust;
  faAngry = faAngry;

  name: string;

  experience = [{
    lenguages: [
      {
        "name": 'html',
        "percentage": 80,
        "bg": '62868C',
      },
      {
        "name": 'typescript',
        "percentage": 30,
        "bg": '62868C',
      },
      {
        "name": 'scss',
        "percentage": 60,
        "bg": '62868C',
      }
      ,
      {
        "name": 'angular',
        "percentage": 40,
        "bg": '62868C',
      }
    ]
  }]

  constructor() { }

  ngOnInit() {
    AOS.init();
  }

  sendName() {
    // TO DO: SCROLL TO HI PAGE
  }

}
