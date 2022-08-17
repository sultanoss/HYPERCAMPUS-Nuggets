import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modul1',
  templateUrl: './modul1.component.html',
  styleUrls: ['./modul1.component.scss'],
})
export class Modul1Component implements OnInit {
  showList: boolean = false;
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
  show20: boolean = false;
  show21: boolean = false;
  show22: boolean = false;
  show23: boolean = false;
  show24: boolean = false;
  show25: boolean = false;
  show26: boolean = false;
  show27: boolean = false;
  show28: boolean = false;
  show29: boolean = false;
  show30: boolean = false;
  show31: boolean = false;
  show32: boolean = false;
  show33: boolean = false;
  show34: boolean = false;
  show35: boolean = false;

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
  pdf11 = 'assets/pdf/Anwendungen der TI E-Patientenakte und eRezept.pdf';
  pdf12 = 'assets/pdf/Anwendungen der TI KIM und E-Medikationsplan.pdf';
  pdf13 = 'assets/pdf/Anwendungen der TI_Notfalldaten und DEMIS.pdf';
  pdf14 = 'assets/pdf/PVS Systeme.pdf';
  pdf15 = 'assets/pdf/Einführung in Verwaltungssysteme.pdf';
  pdf16 = 'assets/pdf/Einführung in KIS-Systeme.pdf';
  pdf17 = 'assets/pdf/Vertiefung von KIS - Systemen.pdf';
  pdf18 = 'assets/pdf/Digitale Gesundheits- und Pflegeanwendungen.pdf';
  pdf19 =
    'assets/pdf/Telemedizinische Anwendungen am Beispiel Videosprechstunde.pdf';
  pdf20 = 'assets/pdf/Medizinische Bild- und Datenverarbeitung.pdf';
  pdf21 = 'assets/pdf/RIS-PACS-Systeme.pdf';
  pdf22 = 'assets/pdf/Andere IT-Systeme.pdf';
  pdf23 = 'assets/pdf/Allgemeine gesetzliche Grundlagen - Teil 1.pdf';

  title = 'highlight-text';

  searchText = '';

  text = `In Deutschland gibt es zahlreiche unterschiedliche Akteure im
  Gesundheitswesen.`;
  text2 = `Robert Koch Institut`;
  text3 = `Paul Ehrlich Institut`;
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
  text32 = `EPA`;
  text33 = `KIM`;
  text34 = `BMG`;
  text35 = `GMG`;
  text36 = `E-medikationsplan`;
  text37 = `DEMIS`;
  text38 = `ISiK`;
  text39 = `BSI`;
  text40 = `EGK`;
  text41 = `PKI`;
  text42 = `EHealth KT`;
  text43 = `SMC-B`;
  text44 = `EHBA`;
  text45 = `E-Rezept`;
  text46 = `KIS`;
  text47 = `PVS`;
  text48 = `Notfalldaten`;
  text49 = `DMS`;
  text50 = `IWiG`;
  text51 = `DiGa`;
  text52 = `DiPas`;
  text53 = `PKV`;
  text54 = `BMV`;
  text55 = `Telemedizin`;
  text56 = `Röntgen`;
  text57 = `CT`;
  text58 = `MRT`;
  text59 = `SPECT`;
  text60 = `PET`;
  text61 = `OCT`;
  text62 = `RIS`;
  text63 = `PACS`;
  text64 = `PDMS`;
  text65 = `OMS`;
  text66 = `ERP`;
  text67 = `LIS`;
  text68 = `AMIce`;
  text69 = `DSGVO`;
  text70 = `BDSG`;
  text71 = `TOM`;
  text72 = `Verzeichnisdienst`;

  searchCollection = [
    this.text2,
    this.text3,
    this.text4,
    this.text5,
    this.text6,
    this.text7,
    this.text8,
    this.text53,
    this.text12,
    this.text13,
    this.text14,
    this.text15,
    this.text16,
    this.text17,
    this.text18,
    this.text19,
    this.text20,
    this.text21,
    this.text22,
    this.text23,
    this.text24,
    this.text25,
    this.text26,
    this.text27,
    this.text28,
    this.text29,
    this.text30,
    this.text31,
    this.text32,
    this.text33,
    this.text34,
    this.text35,
    this.text36,
    this.text37,
    this.text38,
    this.text39,
    this.text40,
    this.text41,
    this.text42,
    this.text43,
    this.text44,
    this.text45,
    this.text46,
    this.text47,
    this.text48,
    this.text49,
    this.text50,
    this.text51,
    this.text52,
    this.text53,
    this.text54,
    this.text55,
    this.text56,
    this.text57,
    this.text58,
    this.text59,
    this.text60,
    this.text61,
    this.text62,
    this.text63,
    this.text64,
    this.text65,
    this.text66,
    this.text67,
    this.text68,
    this.text69,
    this.text70,
    this.text71,
    this.text72,
  ];

  constructor() {}

  ngOnInit(): void {
    this.searchCollection.sort();
  }

  addSearchText(collection: any) {
    this.searchText = collection;
    this.showList = true;
  }
  scroll(collection: any) {
    let el = document.getElementById(collection);
    el?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  }

  showSearchList() {
    this.showList = true;
  }
  hideSearchList() {
    this.showList = false;
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
  openPdf20() {
    this.show20 = true;
  }
  closePdf20() {
    this.show20 = false;
  }
  openPdf21() {
    this.show21 = true;
  }
  closePdf21() {
    this.show21 = false;
  }
  openPdf22() {
    this.show22 = true;
  }
  closePdf22() {
    this.show22 = false;
  }
  openPdf23() {
    this.show23 = true;
  }
  closePdf23() {
    this.show23 = false;
  }
  openPdf24() {
    this.show24 = true;
  }
  closePdf24() {
    this.show24 = false;
  }
  openPdf25() {
    this.show25 = true;
  }
  closePdf25() {
    this.show25 = false;
  }
  openPdf26() {
    this.show26 = true;
  }
  closePdf26() {
    this.show26 = false;
  }
  openPdf27() {
    this.show27 = true;
  }
  closePdf27() {
    this.show27 = false;
  }
  openPdf28() {
    this.show28 = true;
  }
  closePdf28() {
    this.show28 = false;
  }
  openPdf29() {
    this.show29 = true;
  }
  closePdf29() {
    this.show29 = false;
  }
  openPdf30() {
    this.show30 = true;
  }
  closePdf30() {
    this.show30 = false;
  }
  openPdf31() {
    this.show31 = true;
  }
  closePdf31() {
    this.show31 = false;
  }
  openPdf32() {
    this.show32 = true;
  }
  closePdf32() {
    this.show32 = false;
  }
  openPdf33() {
    this.show33 = true;
  }
  closePdf33() {
    this.show33 = false;
  }
  openPdf34() {
    this.show34 = true;
  }
  closePdf34() {
    this.show34 = false;
  }
  openPdf35() {
    this.show35 = true;
  }
  closePdf35() {
    this.show35 = false;
  }
}
