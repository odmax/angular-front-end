import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MabasaHTMLComponent } from './mabasa-html.component';

describe('MabasaHTMLComponent', () => {
  let component: MabasaHTMLComponent;
  let fixture: ComponentFixture<MabasaHTMLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MabasaHTMLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MabasaHTMLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
