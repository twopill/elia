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
        "bg": 'linear-gradient(to right, #4CB8C4 0%, #3CD3AD  51%, #4CB8C4  100%)',
      },
      {
        "name": 'typescript',
        "percentage": 30,
        "bg": 'linear-gradient(to right, #4CB8C4 0%, #3CD3AD  51%, #4CB8C4  100%)',
      },
      {
        "name": 'scss',
        "percentage": 60,
        "bg": 'linear-gradient(to right, #4CB8C4 0%, #3CD3AD  51%, #4CB8C4  100%)',
      }
    ]
  }]

  //background-image: linear-gradient(to right, #4CB8C4 0%, #3CD3AD  51%, #4CB8C4  100%)
  constructor() { }

  ngOnInit(): void {
  }

}
