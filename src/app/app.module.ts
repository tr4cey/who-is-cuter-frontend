import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatMenuModule, MatButtonModule, MatIconModule, MatCardModule} from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material';

import { HomeComponent } from './home/home.component';
import { CreditsComponent } from './credits/credits.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { ConclusionComponent } from './conclusion/conclusion.component';
import { InstallationComponent } from './installation/installation.component';
import { SummaryComponent } from './summary/summary.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreditsComponent,
    TutorialComponent,
    ConclusionComponent,
    InstallationComponent,
    SummaryComponent
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
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}