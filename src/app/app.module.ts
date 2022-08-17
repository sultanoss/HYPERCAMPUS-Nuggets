import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { Modul1Component } from './modul1/modul1.component';
import { HighlighterPipe } from './highlighter.pipe';
import { AbkuerzungenComponent } from './abkuerzungen/abkuerzungen.component';
import { ViewportScroller } from '@angular/common';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ImprintComponent } from './imprint/imprint.component';
import { LeagalnoticeComponent } from './leagalnotice/leagalnotice.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    Modul1Component,
    HighlighterPipe,
    AbkuerzungenComponent,
    ImprintComponent,
    LeagalnoticeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PdfViewerModule,
    MatToolbarModule,
    MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
