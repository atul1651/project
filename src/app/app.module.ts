import { DataService } from './data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TestingComponent } from './testing/testing.component';
import { ManupulationComponent } from './manupulation/manupulation.component';
import { CricketComponent } from './cricket/cricket.component';
import { FootballComponent } from './football/football.component';
import { CactusComponent } from './cactus/cactus.component';
import { MercedesComponent } from './mercedes/mercedes.component';
import { TikonaComponent } from './tikona/tikona.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TestingComponent,
    ManupulationComponent,
    CricketComponent,
    FootballComponent,
    CactusComponent,
    MercedesComponent,
    TikonaComponent,
    PageNotFoundComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'app', component: AppComponent },
      { path: 'header', component: HeaderComponent },
      { path: 'testing', component: TestingComponent },
      { path: 'manupulation', component: ManupulationComponent },
      { path: 'cricket', component: CricketComponent },
      { path: 'football', component: FootballComponent },
      { path: 'cactus', component: CactusComponent },
      { path: 'mercedes', component: MercedesComponent },
      { path: 'home', component: HomeComponent },
      { path: 'tikona', component: TikonaComponent },
      { path: '**', component: PageNotFoundComponent }

    ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
