import { Component } from '@angular/core';
import AOS from 'aos';
import { faCodeBranch, faAngry } from '@fortawesome/free-solid-svg-icons';
import { faAdjust } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  modality: string = 'Pro mode';
  changeMod: boolean = true;

  personalInformation = {
    dimension: {
      height: 460
    },
    information: {
      name: 'Elia',
      age: 22,
      based: 'Turin',
      jobPosition: 'Web Developer',
      hobby: ['Photography', 'Videomaker', 'Retrograming'],
      isOnline: 'true',
      comment: '// It\'s me'
    }
  }

  personalInformationNoob = {
    dimension: {
      height: 460
    },
    text: 'I try to combine the skills acquired through my course of studies related to programming and my personal insights more regarding artistic aspects.'
  }

  skill = {
    dimension: {
      height: 460
    },
    experience: {
      lenguages: ['typescript', 'javascript', 'java', 'c', 'python', 'go'],
    },
    other: {
      frameworks: ['angular', 'xdce']
    }
  }

  skillNoob = {
    text: 'My len : typescript, and u babe'
  }

  softWill = {
    dimension: {
      height: 410
    },
    will: {
      name: ['teamWork', 'leadership', 'flexibility', 'problemSolving']
    }
  }

  softWillNoob = {
    text: 'TeamWork and other other'
  }



  constructor() { }

  ngOnInit() {
    AOS.init();
  }

  switchModality(){
    
    this.changeMod = !this.changeMod;
    this.changeMod ? this.modality = 'Pro mode' : this.modality = 'Noob mode'

  }


}
