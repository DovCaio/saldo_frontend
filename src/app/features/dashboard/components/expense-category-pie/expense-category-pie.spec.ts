import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseCategoryPie } from './expense-category-pie';

describe('ExpenseCategoryPie', () => {
  let component: ExpenseCategoryPie;
  let fixture: ComponentFixture<ExpenseCategoryPie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpenseCategoryPie]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenseCategoryPie);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
