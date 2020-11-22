import { Component } from '@angular/core';
import AOS from 'aos';
import { Router, ActivatedRoute } from '@angular/router';
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
    if (this.pattern.test(name)) {
      return true 
    }
  }

  flag:boolean = false;
  private fragment: string;

  ngOnInit() {
    
    const nameSplash = this.route.snapshot.paramMap.get('name');
    
    this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
    this.isValid(nameSplash)  ? this.name = this.route.snapshot.paramMap.get('name') : this.goToLoader()
    this.nameSplashAutoKiller(nameSplash);

    AOS.init();

  }

  ngAfterViewInit(): void {
    try {
      document.querySelector('#' + this.fragment).scrollIntoView();
    } catch (e) { }
  }

  navigateToAboutMe(){
    this.router.navigate( ['/'], {fragment: 'about-me'});
  }

  nameSplashAutoKiller(nameSplash){
   if(nameSplash == null && this.fragment != 'about-me') {
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
