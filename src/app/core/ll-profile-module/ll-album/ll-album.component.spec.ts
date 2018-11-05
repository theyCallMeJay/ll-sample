import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LlAlbumComponent } from './ll-album.component';

describe('LlAlbumComponent', () => {
  let component: LlAlbumComponent;
  let fixture: ComponentFixture<LlAlbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LlAlbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LlAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
