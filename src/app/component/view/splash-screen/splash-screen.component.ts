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

  constructor(private router: Router) { }

  ngOnInit(): void {
    AOS.init();
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
  //   //Add '${implements OnChanges}' to the class.
  //   this.isValid(changes) 
  // }

  isValid(name) {
    if (this.pattern.test(name)) { return true };
  }

  changeImg(){
    //this.imgPcSmile = this.imgHello;
  }

  out(){
    this.imgPcSmile = this.imgPcBackup;
  }


  controllAndSub(name) {
    if (name != undefined && this.isValid(name)) {
      console.log(name)
      this.router.navigate(['home',name]);
    } else {
      this.imgPcSmile = this.imgAngry;
    }
  }

  mouseHoverLetsGo(){
    //this.imgPcSmile = this.imgGo;
  }

  mouseOutLetsGo(){
    this.imgPcSmile = this.imgPcBackup;
  }

}
