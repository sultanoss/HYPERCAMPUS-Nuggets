import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'HYPERCAMPUS-Nuggets';
  searchText = '';
  mobileMenu: boolean = false;
  openMobileMenu(){
    this.mobileMenu = true;
  }
  closeMobileMenu(){
    this.mobileMenu = false;
  }
}
