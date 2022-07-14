import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMovieResultComponent } from './search-movie-result.component';

describe('SearchMovieResultComponent', () => {
  let component: SearchMovieResultComponent;
  let fixture: ComponentFixture<SearchMovieResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchMovieResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMovieResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
