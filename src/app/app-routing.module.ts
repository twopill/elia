import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/component/view/home/home.component';
import { AboutComponent } from './component/view/about/about.component';
import { InfoProjectComponent } from './component/view/info-project/info-project.component';
import { WipPageComponent } from './component/view/wip-page/wip-page.component';
import { ErrorPageComponent } from './component/view/error-page/error-page.component';
import { SplashScreenComponent } from './component/view/splash-screen/splash-screen.component';

const routes: Routes = [
  { path: 'loader', component: SplashScreenComponent },
  { path: 'home/:name', component: HomeComponent },
  { path: 'about8622', component: AboutComponent },
  { path: 'loader', component: SplashScreenComponent},
  { path: 'info-project/:id/:name', component: InfoProjectComponent },
  { path: 'wip', component: WipPageComponent },
  { path: 'error', component: ErrorPageComponent },
  { path: '**', component: SplashScreenComponent },
  { path: '', redirectTo: 'loader', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
