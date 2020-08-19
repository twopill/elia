import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PageService {
  //raspPage = require("./mock-data/rasp-page.json");

  public text: string[] = [
    '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
  ];

  public img: string[] = ['pi_svg.svg', 'psp.svg'];

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

  constructor() {}

  getPage(id) {
    for (let i = 0; i <= this.text.length; i++) {
      if (id == i) return this.text[i];
      else console.log('## testo non trovato ##');
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
