export interface Transaction {
  id: number;
  description: string;
  amount_cents: number;
  type: 'INCOME' | 'EXPENSE';
}
