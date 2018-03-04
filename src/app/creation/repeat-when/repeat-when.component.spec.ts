import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepeatWhenComponent } from './repeat-when.component';

describe('RepeatWhenComponent', () => {
  let component: RepeatWhenComponent;
  let fixture: ComponentFixture<RepeatWhenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepeatWhenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepeatWhenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
