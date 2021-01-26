import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {
  public linkTheme = document.querySelector('#theme');
  public links!: NodeListOf<Element>;
  constructor() {

  }

  ngOnInit(): void {
    this.links = document.querySelectorAll('.selector');
    this.checkCurrent();
  }


  cambiarTema(tema: string): void{
    console.log(tema);
    this.linkTheme?.removeAttribute('href');
    this.linkTheme?.setAttribute('href', `./assets/css/colors/${tema}.css`);
    localStorage.setItem('theme', `./assets/css/colors/${tema}.css`);
    this.checkCurrent();
  }

  checkCurrent(): void {
    this.links.forEach(x => {
      x.classList.remove('working');
      const elem = x.getAttribute('data-theme');
      const btnUrl = `./assets/css/colors/${elem}.css`;
      const current = this.linkTheme?.getAttribute('href');
      if(btnUrl === current){
        x.classList.add('working');
      }
    });
  }
}
