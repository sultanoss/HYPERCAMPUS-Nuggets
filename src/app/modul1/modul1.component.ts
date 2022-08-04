import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modul1',
  templateUrl: './modul1.component.html',
  styleUrls: ['./modul1.component.scss'],
})
export class Modul1Component implements OnInit {
  show: boolean = false;
  show2: boolean = false;
  show3: boolean = false;
  show4: boolean = false;
  show5: boolean = false;
  show6: boolean = false;
  show7: boolean = false;
  show8: boolean = false;
  show9: boolean = false;
  show10: boolean = false;
  show11: boolean = false;
  show12: boolean = false;
  show13: boolean = false;
  show14: boolean = false;
  show15: boolean = false;
  show16: boolean = false;
  show17: boolean = false;
  show18: boolean = false;
  show19: boolean = false;
  bigImg: boolean = false;
  pdf1 = 'assets/pdf/Generelle Strukturen in der IT.pdf';
  pdf2 = 'assets/pdf/Die Landkarte im Gesundheitswesen Teil 1.pdf';
  pdf3 = 'assets/pdf/04_Die Landkarte im Gesundheitswesen Teil 2 (1).pdf';
  pdf4 = 'assets/pdf/Von der Arztpraxis bis zum Labor (2).pdf';
  pdf5 = 'assets/pdf/Vom Chefarzt bis zur Pflege (2).pdf';
  pdf6 = 'assets/pdf/07_Generelle Strukturen in der IT.pdf';
  pdf7 = 'assets/pdf/08_Die Gematik_W2 (1).pdf';
  pdf8 = 'assets/pdf/Grundsätze der Telematik-Infrastruktur_W2.pdf';
  pdf9 = 'assets/pdf/Die grundsätzliche Architektur der TI.pdf';
  pdf10 = 'assets/pdf/Aufbau der Telematikinfrastruktur Teil II.pdf';
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
  text9 = `Paul Ehrlich Institut und Das BfArM`;
  text10 = `Private Krankenversischerung ( PKV )`;
  text11 = `Gesetzliche Krankenversicherung ( GKV )`;
  text12 = `SGB V`;
  text13 = `Gesundheitsfond`;
  text14 = `Morbi RSA`;
  text15 = `GBA`;
  text16 = `KBV`;
  text17 = `DKG`;
  text18 = `KZBV`;
  text19 = `GKV`;
  text20 = `EBM`;
  text21 = `BÄK`;
  text22 = `BPtK`;
  text23 = `GOÄ`;
  text24 = `KHZG`;
  text25 = `IMD`;
  text26 = `Fat Client`;
  text27 = `Thin Client`;
  text28 = `Zero Client`;
  text29 = `Gematik`;
  text30 = `Telematikinfrastruktur`;
  text31 = `VSDM`;
  text32 = `epa`;
  text33 = `KIM`;
  text34 = `BMG`;
  text35 = `GMG`;
  text36 = `E-medikationsplan`;
  text37 = `DEMIS`;
  text38 = `ISiK`;
  text39 = `BSI`;
  text40 = `eGK`;
  text41 = `PKI`;
  text42 = `eHealth KT`;
  text43 = `SMC-B`;
  text44 = `eHBA`;

  constructor() {}

  ngOnInit(): void {}

  showBidImg() {
    this.bigImg = !this.bigImg;
  }

  openPdf() {
    this.show = true;
  }
  closePdf() {
    this.show = false;
  }
  openPdf2() {
    this.show2 = true;
  }
  closePdf2() {
    this.show2 = false;
  }
  openPdf3() {
    this.show3 = true;
  }
  closePdf3() {
    this.show3 = false;
  }
  openPdf4() {
    this.show4 = true;
  }
  closePdf4() {
    this.show4 = false;
  }
  openPdf5() {
    this.show4 = true;
  }
  closePdf5() {
    this.show4 = false;
  }
  openPdf6() {
    this.show6 = true;
  }
  closePdf6() {
    this.show6 = false;
  }
  openPdf7() {
    this.show7 = true;
  }
  closePdf7() {
    this.show7 = false;
  }
  openPdf8() {
    this.show8 = true;
  }
  closePdf8() {
    this.show8 = false;
  }
  openPdf9() {
    this.show9 = true;
  }
  closePdf9() {
    this.show9 = false;
  }
  openPdf10() {
    this.show10 = true;
  }
  closePdf10() {
    this.show10 = false;
  }
  openPdf11() {
    this.show11 = true;
  }
  closePdf11() {
    this.show11 = false;
  }
  openPdf12() {
    this.show12 = true;
  }
  closePdf12() {
    this.show12 = false;
  }
  openPdf13() {
    this.show13 = true;
  }
  closePdf13() {
    this.show13 = false;
  }
  openPdf14() {
    this.show14 = true;
  }
  closePdf14() {
    this.show14 = false;
  }
  openPdf15() {
    this.show15 = true;
  }
  closePdf15() {
    this.show15 = false;
  }
  openPdf16() {
    this.show16 = true;
  }
  closePdf16() {
    this.show16 = false;
  }
  openPdf17() {
    this.show17 = true;
  }
  closePdf17() {
    this.show17 = false;
  }
  openPdf18() {
    this.show18 = true;
  }
  closePdf18() {
    this.show18 = false;
  }
  openPdf19() {
    this.show19 = true;
  }
  closePdf19() {
    this.show19 = false;
  }
}
