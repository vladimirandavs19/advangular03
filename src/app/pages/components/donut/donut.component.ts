import { createInput } from '@angular/compiler/src/core';
import { Component, Input, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.css']
})
export class DonutComponent implements OnInit {
  @Input() titulo = 'Sales';
  @Input() data: number[] = [350, 450, 100];
  @Input() labels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales']
  // Doughnut
  public doughnutChartType: ChartType = 'doughnut';
  constructor() { }

  ngOnInit(): void {
  }

}
