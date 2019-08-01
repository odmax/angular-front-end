import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mabasa.HTMLComponent } from './mabasa.html.component';

describe('Mabasa.HTMLComponent', () => {
  let component: Mabasa.HTMLComponent;
  let fixture: ComponentFixture<Mabasa.HTMLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mabasa.HTMLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mabasa.HTMLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
