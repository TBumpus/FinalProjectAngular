import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMoviesByCategoryComponent } from './user-movies-by-category.component';

describe('UserMoviesByCategoryComponent', () => {
  let component: UserMoviesByCategoryComponent;
  let fixture: ComponentFixture<UserMoviesByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMoviesByCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMoviesByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
