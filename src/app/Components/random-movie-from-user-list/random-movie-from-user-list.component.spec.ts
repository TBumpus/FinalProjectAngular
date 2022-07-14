import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomMovieFromUserListComponent } from './random-movie-from-user-list.component';

describe('RandomMovieFromUserListComponent', () => {
  let component: RandomMovieFromUserListComponent;
  let fixture: ComponentFixture<RandomMovieFromUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomMovieFromUserListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomMovieFromUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
