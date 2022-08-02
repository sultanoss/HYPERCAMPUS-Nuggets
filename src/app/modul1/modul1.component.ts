import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modul1',
  templateUrl: './modul1.component.html',
  styleUrls: ['./modul1.component.scss'],
})
export class Modul1Component implements OnInit {
  show: boolean = false;
  title = 'highlight-text';
  searchText = '';
  text = `In Deutschland gibt es zahlreiche unterschiedliche Akteure im
  Gesundheitswesen.`;
  text2 = `Robert Koch Institut`;
  text3 = `Paul Ehrlich Institut `;
  text4 = `BZgA`;
  text5 = `DIMDI`;
  text6 = `DIVI`;
  text7 = `IQWiG`;
  text8 = `BfArM`;
  text9 = `Paul Ehrlich Institut und Das BfArM`
  description1 = ``;

  constructor() {}

  ngOnInit(): void {}

  scrollToIdRef(element:any): void {

    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}
}