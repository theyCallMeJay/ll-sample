import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LlProfileComponent } from './ll-profile.component';

describe('LlProfileComponent', () => {
  let component: LlProfileComponent;
  let fixture: ComponentFixture<LlProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LlProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LlProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
