import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CreditsComponent } from './credits/credits.component';
import { SummaryComponent } from './summary/summary.component';
import { InstallationComponent } from './installation/installation.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { ConclusionComponent } from './conclusion/conclusion.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'credits', component: CreditsComponent},
  { path: 'summary', component: SummaryComponent},
  { path: 'installation', component: InstallationComponent},
  { path: 'tutorial', component: TutorialComponent},
  { path: 'conclusion', component: ConclusionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
