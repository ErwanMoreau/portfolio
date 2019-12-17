import { Component, OnInit } from '@angular/core';
import { Logs } from 'selenium-webdriver';

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.scss']
})
export class CompetenceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.generateRandomProgress('#html');
    this.generateRandomProgress('#css');
    this.generateRandomProgress('#java');
    this.generateRandomProgress('#php');
    this.generateRandomProgress('#NodeJs');
    this.generateRandomProgress('#SQL');
    this.generateRandomProgress('#Angular');
    this.generateRandomProgress('#Laravel');
    this.generateRandomProgress('#Python');
    this.generateRandomProgress('#Photoshop');
  }

  getRandomInt(min, max) {
    // tslint:disable-next-line: no-parameter-reassignment
    min = Math.ceil(min);
    // tslint:disable-next-line: no-parameter-reassignment
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min)) + min;
  }

  generateRandomProgress(bar) {

    const varia = document.querySelector(bar);

    // tslint:disable-next-line: radix
    const valeurNow = Number(varia.getAttribute('aria-valuenow'));
    const valueMax = Number(varia.getAttribute('aria-valuemax'));
    let valeur = valeurNow;

    // tslint:disable-next-line: only-arrow-functions
    setInterval(() => {
      const randomnmb = this.getRandomInt(1, 3);

      if (valeur === valueMax) {
        clearInterval();
      } else if (valeur >= (valueMax - 10)) {
        valeur = valeur + 1;
      } else {
        valeur = valeur + Number(randomnmb);
      }

      varia.setAttribute('aria-valuenow', valeur.toString());
      varia.setAttribute('style', 'width:' + valeur.toString() + '%');
      varia.innerHTML = valeur.toString() + '%';

    }, 100);
  }

}
