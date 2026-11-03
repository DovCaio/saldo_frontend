export interface TransactionSummary {
  total_income: number;
  total_expense: number;
  balance: number;
  series: Serie[];
}

export interface Serie {
  date: string;
  income: number;
  expense: number;
}
