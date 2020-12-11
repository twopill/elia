import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import AOS from 'aos';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import splash_screen_data from '../../../json/splash_screen_data.json'


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
  imgFresh: string = "../../../../assets/elia_in_piedi.png"
  click: boolean = false;
  errorMessage: string;
  questionMarkLoop = [];

  public pageLabel = {
    title: null,
    subtitle: null
  }

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    AOS.init();
    this.takeDataApi();

    setInterval(()=>{
      if(this.name == null){
        this.questionMarkLoop.push('?')
      }
      if(this.questionMarkLoop.length == 3){
        this.imgPcSmile = this.imgAngry;
        this.errorMessage = 'Puoi inserire il tuo nome? Grazie!'
      }else if(this.questionMarkLoop.length == 8){
        this.errorMessage = ''
        setTimeout(()=>{
          this.errorMessage = 'Non mi fare arrabbiare o te ne pentirai...'
        },30000 )
      }else if(this.questionMarkLoop.length == 10){
        this.errorMessage = 'Ok va bene.'
        setTimeout(()=>{
          //window.location.href = "https://it.wikipedia.org/wiki/Anagrafe";
        },30000 )
      }
    },30000)

  }


  getData() : Observable<any> {
    const linkApi = "../../../../../assets/json/splash_screen.json"
    return this.http.get<any>(linkApi)
  }

  takeDataApi() {
    this.getData().subscribe(data=>{
      this.pageLabel.title = data.title;
      this.pageLabel.subtitle = data.subtitle;
    })
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
