import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent implements OnInit {
  labels1: string[];

  constructor() {
    this.labels1 = ['A', 'AB', 'C'];
  }

  ngOnInit(): void {
  }

}
