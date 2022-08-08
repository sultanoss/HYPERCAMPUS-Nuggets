import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagalnoticeComponent } from './leagalnotice.component';

describe('LeagalnoticeComponent', () => {
  let component: LeagalnoticeComponent;
  let fixture: ComponentFixture<LeagalnoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeagalnoticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagalnoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
