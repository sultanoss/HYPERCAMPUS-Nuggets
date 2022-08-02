import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbkuerzungenComponent } from './abkuerzungen.component';

describe('AbkuerzungenComponent', () => {
  let component: AbkuerzungenComponent;
  let fixture: ComponentFixture<AbkuerzungenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbkuerzungenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbkuerzungenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
