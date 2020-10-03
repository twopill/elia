import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs/operators';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.scss']
})
export class CakeComponent implements OnInit {

  experience = [{
    lenguages:[
      {
        "name": 'html',
        "percentage": 80,
        "color": '#1d1d1d',
      },
      {
        "name": 'typescript',
        "percentage": 30,
        "color": 'brown',
      },
      {
        "name": 'scss',
        "percentage": 60,
        "color": 'green',
      }
    ]
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
