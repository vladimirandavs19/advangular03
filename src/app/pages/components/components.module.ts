import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonutComponent } from './donut/donut.component';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    DonutComponent
  ],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports: [
    DonutComponent
  ]
})
export class ComponentsModule { }
