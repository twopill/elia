import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/component/view/home/home.component';
import { AboutComponent } from './component/view/about/about.component';
import { InfoProjectComponent } from './component/view/info-project/info-project.component';
import { WipPageComponent } from './component/view/wip-page/wip-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about-me', component: AboutComponent },
  { path: 'info-project/:id/:name', component: InfoProjectComponent },
  { path: 'wip', component: WipPageComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
