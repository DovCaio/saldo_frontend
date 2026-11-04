import { Component, Input, OnChanges } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartData, ChartOptions } from 'chart.js';

interface TransactionSerie {
  date: string;
  income: number;
  expense: number;
}

@Component({
  selector: 'app-income-expense-line',
  imports: [BaseChartDirective],
  templateUrl: './income-expense-line.html',
  styleUrl: './income-expense-line.scss',
})
export class IncomeExpenseLine implements OnChanges {
  @Input() series: TransactionSerie[] = [];

  chartData: ChartData<'line'> = {
    labels: [],
    datasets: [
      {
        label: 'Receitas',
        data: [],
        borderColor: '#16a34a',
        backgroundColor: '#16a34a',
        tension: 0.3,
      },
      {
        label: 'Despesas',
        data: [],
        borderColor: '#ef4444',
        backgroundColor: '#ef4444',
        tension: 0.3,
      },
    ],
  };

  chartOptions: ChartOptions<'line'> = {
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
      labels: this.series.map((item) => item.date),
      datasets: [
        {
          ...this.chartData.datasets[0],
          data: this.series.map((item) => item.income / 100),
        },
        {
          ...this.chartData.datasets[1],
          data: this.series.map((item) => item.expense / 100),
        },
      ],
    };
  }
}
