import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class PageService {
  //raspPage = require("./mock-data/rasp-page.json");

  public textFirst: string[] = [
    'Il progetto nasce con la sfida di voler creare una vpn casalinga assieme ad un indirizzo dns di filtraggio per ads e pagine web dannose. Installazione di OpenVpn e la sua configurazione sono semplici e mi permettono di fare diversi test prima di decidere la mia configurazione personale.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
  ];

  public textSecond: string[] = [
    'Collego la vpn a Pi-hole, anche lui sistema di filtraggio dns assolutamente semplice e con un interfaccia web veramente semplice e ben fatta.La rete vpn può essere utilizzata anche sul cellulare grazie all app sia android che ios.',
  ];

  public img: string[] = [
    '../../../../assets/pi.png',
    '../../../../assets/psp.png',
  ];

  public text_obj: any[] = [
    {
      id: '0',
      text:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
      img: '../../../../assets/pi_svg.svg',
    },
    {
      id: '1',
      text:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
      img: '../../../../assets/psp.svg',
    },
  ];

  constructor(private route: Router) {}

  getTextFirst(id) {
    for (let i = 0; i <= this.textFirst.length; i++) {
      if (id == 0) return this.textFirst[i];
      else if (id == 1) return this.textFirst[i];
      else this.route.navigate(['/wip']);
      console.log('## testo non trovato ##');
    }
  }

  getTextSecond(id) {
    for (let i = 0; i <= this.textSecond.length; i++) {
      if (id == 0) return this.textSecond[i];
      else if (id == 1) return this.textSecond[i];
      else this.route.navigate(['/wip']);
      console.log('## testo non trovato ##');
    }
  }

  getImg(id) {
    for (let i = 0; i <= this.img.length; i++) {
      if (id == i) return this.img[i];
      else console.log('## img non trovato ##');
    }
  }

  getTitle(title) {
    return title;
  }
}
