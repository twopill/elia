import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wip-page',
  templateUrl: './wip-page.component.html',
  styleUrls: ['./wip-page.component.scss'],
})
export class WipPageComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {}

  navigateBack() {
    this.route.navigate(['/home']);
  }
}
