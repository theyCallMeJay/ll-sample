import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LlHeaderComponent } from './ll-header.component';

describe('LlHeaderComponent', () => {
  let component: LlHeaderComponent;
  let fixture: ComponentFixture<LlHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LlHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LlHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
