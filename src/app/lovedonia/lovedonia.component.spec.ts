import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LovedoniaComponent } from './lovedonia.component';

describe('LovedoniaComponent', () => {
  let component: LovedoniaComponent;
  let fixture: ComponentFixture<LovedoniaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LovedoniaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LovedoniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
