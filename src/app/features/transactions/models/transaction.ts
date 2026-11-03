export interface Transaction {
  id: number;
  Description: string;
  AmountCents: number;
  Type: 'INCOME' | 'EXPENSE';
}
