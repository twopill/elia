import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})

export class TerminalComponent implements OnInit {

  @Input('personalInformation') personalInformation?: any; 
  @Input('skill') skill?: any;
  @Input('softWill') softWill?: any;
  @Input('personalInformationNoob') personalInformationNoob?: any;

  constructor() { }
    
  ngOnInit(): void {
  }

}
