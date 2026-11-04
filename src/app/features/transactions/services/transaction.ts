import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Transaction } from '../models/transaction';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private http = inject(HttpClient);

  private readonly API_URL = 'http://localhost:8080/transactions';

  getTransactions() {
    return this.http.get<Transaction[]>(this.API_URL);
  }

  importTransactions(file: File) {
    const formData = new FormData();

    formData.append('file', file);

    return this.http.post(`${this.API_URL}/import`, formData);
  }

  getSummary() {
    return this.http.get(`${this.API_URL}/summary?group_by=DAY`);
  }
}
