import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistinctKeyComponent } from './distinct-key.component';

describe('DistinctKeyComponent', () => {
  let component: DistinctKeyComponent;
  let fixture: ComponentFixture<DistinctKeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistinctKeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistinctKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
