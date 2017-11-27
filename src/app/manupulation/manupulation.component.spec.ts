import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManupulationComponent } from './manupulation.component';

describe('ManupulationComponent', () => {
  let component: ManupulationComponent;
  let fixture: ComponentFixture<ManupulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManupulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManupulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
