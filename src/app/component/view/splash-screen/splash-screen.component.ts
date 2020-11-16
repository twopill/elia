import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import AOS from 'aos';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss']
})

export class SplashScreenComponent implements OnInit {

  name: any;
  pattern: RegExp = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.' -]+$/u;
  imgHello: string = "../../../../assets/elia_seduto_saluta.png"
  imgPcSmile: string = "../../../../assets/elia_pc.png"
  imgPcBackup: string = "../../../../assets/elia_pc.png"
  imgAngry: string = "../../../../../assets/elia_angry.png"
  imgGo: string  = "../../../../../assets/elia_go.png"
  click: boolean = false;
  errorMessage: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
    AOS.init();
  }

  isValid(name) {
    if (this.pattern.test(name)) { return true };
  }

  changeImg(){
    //this.imgPcSmile = this.imgHello;
  }

  out(){
    this.imgPcSmile = this.imgPcBackup;
    //FIXME: serve ancora? (non ho tempo di guardare mo sorry)
  }


  controllAndSub(name) {
    if (name != undefined && this.isValid(name)) {
      this.errorMessage = 'Grande!'
      setTimeout(()=>{ this.router.navigate(['home',name]); },1200)
    } else {
      this.imgPcSmile = this.imgAngry;
      this.errorMessage = 'Hai sbagliato...'
    }
  }

  mouseOutLetsGo(){
    this.imgPcSmile = this.imgPcBackup;
    this.errorMessage = ' '
  }

}
