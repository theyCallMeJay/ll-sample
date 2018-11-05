import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LlFooterComponent } from './ll-footer.component';

describe('LlFooterComponent', () => {
  let component: LlFooterComponent;
  let fixture: ComponentFixture<LlFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LlFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LlFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
