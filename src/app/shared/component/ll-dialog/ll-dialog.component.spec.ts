import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LlDialogComponent } from './ll-dialog.component';

describe('LlDialogComponent', () => {
  let component: LlDialogComponent;
  let fixture: ComponentFixture<LlDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LlDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LlDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
