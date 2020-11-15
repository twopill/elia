import { Component, SimpleChanges } from '@angular/core';
import AOS from 'aos';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ElementRef } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  modality: string = 'Pro mode';
  changeMod: boolean = true;
  name: string;

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

  pattern: RegExp = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.' -]+$/u;
  

  constructor(private route: ActivatedRoute, private router: Router, { nativeElement }: ElementRef<HTMLImageElement>) {
    const supports = 'loading' in HTMLImageElement.prototype;

    if (supports) {
      nativeElement.setAttribute('loading', 'lazy');
    }
    
  }

  isValid(name) {
    if (this.pattern.test(name) || name == '#about-me' ) {
      console.log(name) 
      return true 
    }
  }

  ngOnInit() {
    
    let nameSplash = this.route.snapshot.paramMap.get('name');

    nameSplash == null ? this.goToLoader() : null
    this.isValid(nameSplash)  ? this.name = this.route.snapshot.paramMap.get('name') : this.goToLoader()
    this.nameSplashAutoKiller(nameSplash);
    AOS.init();

  }

  nameSplashAutoKiller(nameSplash){
   if(nameSplash == null && !this.route.snapshot.paramMap.getAll('#about-me')){
     console.log('scusa ma devi andartene')
     this.goToLoader();
   }
  }

  goToLoader() {
    this.router.navigate(['loader']);
  }

  switchModality() {
    this.changeMod = !this.changeMod;
    this.changeMod ? this.modality = 'Pro mode' : this.modality = 'Noob mode'
  }


}
