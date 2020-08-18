import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  //raspPage = require("./mock-data/rasp-page.json");

  public text: string[] = [
    'il progetto nasce con la necessità di testo a caso wewe tutu nabrabab',
    "la psp è bellissima con la necessità di testo a caso wewe tutu nabrabab"
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
