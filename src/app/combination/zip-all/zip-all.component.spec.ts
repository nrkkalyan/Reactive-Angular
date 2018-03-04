import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipAllComponent } from './zip-all.component';

describe('ZipAllComponent', () => {
  let component: ZipAllComponent;
  let fixture: ComponentFixture<ZipAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZipAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZipAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
