import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PageService } from "../../../service/page.service"

@Component({
  selector: 'app-info-project',
  templateUrl: './info-project.component.html',
  styleUrls: ['./info-project.component.scss']
})
export class InfoProjectComponent implements OnInit {

  text: string = '';
  title: string = '';
  
  show:boolean = false;

  animation: string ='animation: 10s infinite loopImgRasp'

  // cazz: string[]=[
  //   'BELLA A TE MAN',
  //   'BELLA A TE MAN','BELLA A TE MAN','BELLA A TE MAN','BELLA A TE MAN',
  //   'BELLA A TE MAN','BELLA A TE MAN',
  //   'BELLA A TE MAN','BELLA A TE MAN',
  //   'BELLA A TE MAN','BELLA A TE MAN','BELLA A TE MAN'
  // ]

  constructor(
    private route: ActivatedRoute,
    private pageService: PageService
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const title = this.route.snapshot.paramMap.get('name');
    
    this.text = this.pageService.getPage(id);
    this.title = this.pageService.getTitle(title);
  }

  header_var = false;
  @HostListener("document:scroll")
  // calcScrollY():string{
  //   let numberY = 40 - 10;
  //   let parse = numberY.toString()
  //   //console.log(parse)
  //   return 'height:'+parse+'vh'
  // }
  // `
  scrollFunction(){
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
      //console.log(document.documentElement.scrollTop)
      this.header_var = true;
      
      this.animation = 'animation: 2s forwards closeImg ease-out'
      //this.scroll = 'height: 15vh'
    }else 
      {
        this.header_var = false;
        this.animation = 'animation: 10s infinite loopImgRasp'
      }  
  }

}
