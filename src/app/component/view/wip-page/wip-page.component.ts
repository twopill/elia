import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { delay } from 'rxjs/operators';
@Component({
  selector: 'app-wip-page',
  templateUrl: './wip-page.component.html',
  styleUrls: ['./wip-page.component.scss'],
})
export class WipPageComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.route.navigate(['/home']);
    }, 5000);
  }

  navigateBack() {
    return this.route.navigate(['/home']);
  }
}
