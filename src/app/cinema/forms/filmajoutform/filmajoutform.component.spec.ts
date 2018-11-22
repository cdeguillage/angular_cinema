import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmajoutformComponent } from './filmajoutform.component';

describe('FilmajoutformComponent', () => {
  let component: FilmajoutformComponent;
  let fixture: ComponentFixture<FilmajoutformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmajoutformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmajoutformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
