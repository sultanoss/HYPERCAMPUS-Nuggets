import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AbkuerzungenComponent } from './abkuerzungen/abkuerzungen.component';
import { HomeComponent } from './home/home.component';
import { Modul1Component } from './modul1/modul1.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'modul1',component:Modul1Component},
  {path:'shortcuts',component:AbkuerzungenComponent},
];
const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
