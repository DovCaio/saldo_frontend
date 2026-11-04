import { Component, Input, OnChanges } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartData, ChartOptions } from 'chart.js';
import { Transaction } from '../../../transactions/models/transaction';

@Component({
  selector: 'app-expense-category-pie',
  imports: [BaseChartDirective],
  templateUrl: './expense-category-pie.html',
  styleUrl: './expense-category-pie.scss',
})
export class ExpenseCategoryPie {
  @Input() transactions: Transaction[] = [];
  @Input() title: string = '';
  chartData: ChartData<'pie'> = {
    labels: [],
    datasets: [
      {
        label: this.title,
        data: [],
        backgroundColor: [],
      },
    ],
  };

  public chartOptions: ChartOptions<'pie'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

  ngOnChanges(): void {
    this.chartData = {
      labels: this.transactions.map((item) => item.Description),
      datasets: [
        {
          ...this.chartData.datasets[0],
          data: this.transactions.map((item) => item.AmountCents / 100),
          backgroundColor: this.transactions.map(
            () => `#${Math.floor(Math.random() * 16777215).toString(16)}`,
          ),
        },
      ],
    };
  }
}
