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



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    Modul1Component,
    HighlighterPipe,
    AbkuerzungenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
