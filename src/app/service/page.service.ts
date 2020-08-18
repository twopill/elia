import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  //raspPage = require("./mock-data/rasp-page.json");

  public text: string[] = [
    'Ciao sono un raspberry',
    "Ciao sono una psp"
  ]

  constructor() { }

  getPage(id){
    for(let i = 0; i <= this.text.length;i++){
      if(id == i) return this.text[i]
      else console.log('## testo non trovato ##')
    }
  }

  getTitle(title){
    return title;
  }

}
