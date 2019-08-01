import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Palesa2Component } from './palesa2.component';

describe('Palesa2Component', () => {
  let component: Palesa2Component;
  let fixture: ComponentFixture<Palesa2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Palesa2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Palesa2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
