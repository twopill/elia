import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageService } from '../../../service/page.service';

@Component({
  selector: 'app-info-project',
  templateUrl: './info-project.component.html',
  styleUrls: ['./info-project.component.scss'],
})
export class InfoProjectComponent implements OnInit {
  textFirst: string;
  textSecond: string;

  title: string = '';
  img: any = '../../../../assets/pi.png';
  show: boolean = false;

  animation: string = '';
  animation_rect: string = '2s forwards openRectangle ease-in';

  constructor(
    private route: ActivatedRoute,
    private pageService: PageService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const title = this.route.snapshot.paramMap.get('name');

    this.textFirst = this.pageService.getTextFirst(id);
    this.textSecond = this.pageService.getTextSecond(id);
    this.img = this.pageService.getImg(id);
    this.title = this.pageService.getTitle(title);

    if (this.textSecond == undefined) {
      this.show = !this.show;
    }
  }

  getUrl() {
    return this.img.toString();
  }

  navigateBack() {
    window.history.back();
  }

  header_var = false;
  @HostListener('document:scroll')
  scrollFunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.header_var = true;
      this.animation = '2s forwards closeImg ease-out';
      this.animation_rect = '2s forwards closeRectangle ease-out';
    } else {
      this.header_var = false;
      this.animation = '10s infinite loopImgRasp';
      this.animation_rect = '2s forwards openRectangle ease-in';
    }
  }
}
