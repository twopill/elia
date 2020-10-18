import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss'],
})
export class ErrorPageComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.route.navigate(['/loader']);
    }, 2500);
  }

  navigateBack() {
    return this.route.navigate(['/loader']);
  }
}
