import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatMenuModule, MatButtonModule, MatIconModule, MatCardModule} from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { CreditsComponent } from './credits/credits.component';
import { TutorialComponent } from './tutorial/tutorial.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AssignmentComponent,
    CreditsComponent,
    TutorialComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatExpansionModule,
    RouterModule.forRoot([
		{ path: '', component: HomeComponent},
		{ path: 'assignment', component: AssignmentComponent},
		{ path: 'tutorial', component: TutorialComponent},
		{ path: 'credits', component: CreditsComponent}
			    
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}