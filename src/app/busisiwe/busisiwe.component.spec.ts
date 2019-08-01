import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusisiweComponent } from './busisiwe.component';

describe('BusisiweComponent', () => {
  let component: BusisiweComponent;
  let fixture: ComponentFixture<BusisiweComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusisiweComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusisiweComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
