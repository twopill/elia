import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PageService } from "../../../service/page.service"

@Component({
  selector: 'app-info-project',
  templateUrl: './info-project.component.html',
  styleUrls: ['./info-project.component.scss']
})
export class InfoProjectComponent implements OnInit {

  text: string = '';

  show:boolean = false;

  cazz: string[]=[
    'BELLA A TE MAN',
    'BELLA A TE MAN','BELLA A TE MAN','BELLA A TE MAN','BELLA A TE MAN',
    'BELLA A TE MAN','BELLA A TE MAN',
    'BELLA A TE MAN','BELLA A TE MAN',
    'BELLA A TE MAN','BELLA A TE MAN','BELLA A TE MAN'
  ]

  constructor(
    private route: ActivatedRoute,
    private pageService: PageService
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.text = this.pageService.getPage(id);
  }

}

/*ngOnInit() {
  const id = this.route.snapshot.paramMap.get('id');

  this.hero$ = this.service.getHero(id);
}*/
