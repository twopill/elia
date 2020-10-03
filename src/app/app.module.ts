import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/view/home/home.component';
import { AboutComponent } from './component/view/about/about.component';
import { InfoProjectComponent } from './component/view/info-project/info-project.component';
import { WipPageComponent } from './component/view/wip-page/wip-page.component';
import { ErrorPageComponent } from './component/view/error-page/error-page.component';
import { CakeComponent } from './component/cake/cake.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    InfoProjectComponent,
    WipPageComponent,
    ErrorPageComponent,
    CakeComponent,
  ],
  imports: [ BrowserModule, AppRoutingModule,FormsModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
