import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LlNavbarComponent } from './ll-navbar.component';

describe('LlNavbarComponent', () => {
  let component: LlNavbarComponent;
  let fixture: ComponentFixture<LlNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LlNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LlNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
