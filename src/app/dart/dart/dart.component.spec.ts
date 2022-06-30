import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DartComponent } from './dart.component';

describe('DartComponent', () => {
  let component: DartComponent;
  let fixture: ComponentFixture<DartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
