import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HallFamaComponent } from './hall-fama.component';

describe('HallFamaComponent', () => {
  let component: HallFamaComponent;
  let fixture: ComponentFixture<HallFamaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HallFamaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HallFamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
