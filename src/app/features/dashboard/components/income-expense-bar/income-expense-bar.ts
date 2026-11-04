import { Component, Input, OnChanges } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-income-expense-bar',
  imports: [BaseChartDirective],
  templateUrl: './income-expense-bar.html',
  styleUrl: './income-expense-bar.scss',
})
export class IncomeExpenseBar implements OnChanges {
  @Input() series: { date: string; income: number; expense: number }[] = [];

  chartData: ChartData<'bar'> = {
    labels: [],
    datasets: [
      {
        label: 'Diferença',
        data: [],
        backgroundColor: '#fffff',
      },
    ],
  };

  public chartOptions: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  ngOnChanges(): void {
    const values = this.series.map(
      (item) => (item.income - item.expense) / 100,
    );

    this.chartData = {
      labels: this.series.map((item) => item.date),
      datasets: [
        {
          ...this.chartData.datasets[0],
          data: values,
          backgroundColor: values.map((value) =>
            value < 0 ? '#dc2626' : '#16a34a',
          ),
        },
      ],
    };
  }
}
