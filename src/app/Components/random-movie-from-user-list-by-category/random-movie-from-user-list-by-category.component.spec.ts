import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomMovieFromUserListByCategoryComponent } from './random-movie-from-user-list-by-category.component';

describe('RandomMovieFromUserListByCategoryComponent', () => {
  let component: RandomMovieFromUserListByCategoryComponent;
  let fixture: ComponentFixture<RandomMovieFromUserListByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomMovieFromUserListByCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomMovieFromUserListByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
