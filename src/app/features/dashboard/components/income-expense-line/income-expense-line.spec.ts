import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeExpenseLine } from './income-expense-line';

describe('IncomeExpenseLine', () => {
  let component: IncomeExpenseLine;
  let fixture: ComponentFixture<IncomeExpenseLine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncomeExpenseLine]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncomeExpenseLine);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
