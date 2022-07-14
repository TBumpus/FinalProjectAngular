import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignUpdateCategoryComponent } from './assign-update-category.component';

describe('AssignUpdateCategoryComponent', () => {
  let component: AssignUpdateCategoryComponent;
  let fixture: ComponentFixture<AssignUpdateCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignUpdateCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignUpdateCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
