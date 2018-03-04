import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalBooleanComponent } from './conditional-boolean.component';

describe('ConditionalBooleanComponent', () => {
  let component: ConditionalBooleanComponent;
  let fixture: ComponentFixture<ConditionalBooleanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConditionalBooleanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionalBooleanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
