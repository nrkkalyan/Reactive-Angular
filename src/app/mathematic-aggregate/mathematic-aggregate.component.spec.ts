import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MathematicAggregateComponent } from './mathematic-aggregate.component';

describe('MathematicAggregateComponent', () => {
  let component: MathematicAggregateComponent;
  let fixture: ComponentFixture<MathematicAggregateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathematicAggregateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathematicAggregateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
