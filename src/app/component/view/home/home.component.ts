import { Component } from '@angular/core';
import AOS from 'aos';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent{

  faCodeBranch = faCodeBranch;

  links: string[] = ['raspberry vpn', 'instagram', 'psp go hack', '3ds hack'];

  social: string[] = ['github', 'instagram', 'reddit'];

  nLinks: object[] = [
    {
      name: 'raspberry vpn',
      id: '0',
    },
    {
      name: 'psp go hack',
      id: '1',
    },
    {
      name: '3ds hack',
      id: '2',
    },
  ];
  
  name: string;

  experience= [{
    lenguages:[
      {
        "name": 'html',
        "percentage": 80,
        "bg": 'linear-gradient(to right, #4CB8C4 0%, #3CD3AD  51%, #4CB8C4  100%)',
      },
      {
        "name": 'typescript',
        "percentage": 30,
        "bg": 'linear-gradient(to right, #4CB8C4 0%, #3CD3AD  51%, #4CB8C4  100%)',
      },
      {
        "name": 'scss',
        "percentage": 60,
        "bg": 'linear-gradient(to right, #4CB8C4 0%, #3CD3AD  51%, #4CB8C4  100%)',
      }
    ]
  }]

  constructor() {}

  ngOnInit(){
    AOS.init();
  }

  sendName(){
    // TO DO: SCROLL TO HI PAGE
  }
  
}
