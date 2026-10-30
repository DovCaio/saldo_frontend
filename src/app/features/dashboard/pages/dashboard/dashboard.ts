import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TransactionService } from '../../../transactions/services/transaction';
import { Transaction } from '../../../transactions/models/transaction';
@Component({
  selector: 'app-dashboard',
  imports: [FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  title = 'Meu dashboard';
  private transactionService = inject(TransactionService);
  counter = 0;

  incrementCounter() {
    this.counter++;
  }

  transactions: Transaction[] = [];

  ngOnInit() {
    this.transactionService.getTransactions().subscribe({
      next: (data) => {
        this.transactions = data;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  balance = signal(10000);
  expenses = signal(2500);

  expensePercent = computed(() => {
    return (this.expenses() / this.balance()) * 100;
  });
}
