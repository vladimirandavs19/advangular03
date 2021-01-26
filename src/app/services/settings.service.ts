import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  public linkTheme = document.querySelector('#theme');
  constructor() {
    console.log('Setting service init');
    const url = localStorage.getItem('theme') || './assets/css/colors/default.css';
    this.linkTheme?.removeAttribute('href');
    this.linkTheme?.setAttribute('href', `${url}`);
  }
}
