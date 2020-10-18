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

  constructor(private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    AOS.init();
  }

  isValid(name) {
    if (this.pattern.test(name)) { return true };
  }

  controllAndSub(name) {
    if (name != undefined && this.isValid(name)) {
      console.log(name)
      this.router.navigate(['home',name]);
    } else {
      console.log('sbagliato merda')
    }
  }

}
