import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeExpenseBar } from './income-expense-bar';

describe('IncomeExpenseBar', () => {
  let component: IncomeExpenseBar;
  let fixture: ComponentFixture<IncomeExpenseBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncomeExpenseBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncomeExpenseBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
