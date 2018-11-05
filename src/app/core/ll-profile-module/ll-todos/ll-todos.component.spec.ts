import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LlTodosComponent } from './ll-todos.component';

describe('LlTodosComponent', () => {
  let component: LlTodosComponent;
  let fixture: ComponentFixture<LlTodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LlTodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LlTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
