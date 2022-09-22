import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'January',
      'February',
      'March',
      'April',
    ],
    datasets: [
      {
        data: [ 2.5, 1.4, 6, 4],
        label: '',
        fill: true,
        tension: 0.5,
        borderColor: 'rgb(41, 98, 255)',
        backgroundColor: 'rgb(41, 98, 255)'
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  public lineChartLegend = false;
  
  

  constructor() { }

  ngOnInit(): void {
  }

}
