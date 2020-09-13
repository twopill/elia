import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faAdjust} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  faBars = faBars;
  faAdjust = faAdjust;

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
  user: any = { name: ''};
  name: string;

  constructor() {}

  
}
