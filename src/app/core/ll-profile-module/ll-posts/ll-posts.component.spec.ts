import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LlPostsComponent } from './ll-posts.component';

describe('LlPostsComponent', () => {
  let component: LlPostsComponent;
  let fixture: ComponentFixture<LlPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LlPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LlPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
