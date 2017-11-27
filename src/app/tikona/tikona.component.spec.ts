import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TikonaComponent } from './tikona.component';

describe('TikonaComponent', () => {
  let component: TikonaComponent;
  let fixture: ComponentFixture<TikonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TikonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TikonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
