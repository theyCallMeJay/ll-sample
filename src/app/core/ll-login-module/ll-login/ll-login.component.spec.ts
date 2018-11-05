import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LlLoginComponent } from './ll-login.component';

describe('LlLoginComponent', () => {
  let component: LlLoginComponent;
  let fixture: ComponentFixture<LlLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LlLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LlLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
