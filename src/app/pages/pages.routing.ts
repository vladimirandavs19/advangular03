import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

const routes: Routes = [
  {path: '', component: PagesComponent, children: [
    { path: 'dashboard', component: DashboardComponent},
    { path: 'progress', component: ProgressComponent},
    { path: 'grafica1', component: Grafica1Component},
    { path: 'account', component: AccountSettingsComponent},
    { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
