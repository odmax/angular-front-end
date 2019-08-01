import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MosesComponent } from './moses.component';

describe('MosesComponent', () => {
  let component: MosesComponent;
  let fixture: ComponentFixture<MosesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MosesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MosesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
