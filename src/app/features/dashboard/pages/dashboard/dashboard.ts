import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TransactionService } from '../../../transactions/services/transaction';
import { Transaction } from '../../../transactions/models/transaction';
import { CurrencyPipe } from '@angular/common';
import { TransactionSummary } from '../../../transactions/models/summary';
@Component({
  selector: 'app-dashboard',
  imports: [FormsModule, CurrencyPipe],
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

  transactions = signal<Transaction[]>([]);
  summary = signal<TransactionSummary | null>(null);

  ngOnInit() {
    this.transactionService.getTransactions().subscribe({
      next: (data) => {
        this.transactions.set(data);
      },
      error: (error) => console.error(error),
    });

    this.transactionService.getSummary().subscribe({
      next: (data) => {
        console.log(data);
        this.summary.set(data as TransactionSummary);
      },
      error: (error) => console.error(error),
    });
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;

    const file = input.files?.[0];

    if (!file) return;

    this.transactionService.importTransactions(file).subscribe({
      next: (data) => {},
      error: (error) => {},
    });
  }
}
