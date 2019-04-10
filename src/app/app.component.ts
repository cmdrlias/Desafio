import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Desafio';
  public static KEY='CPF';
  public static i=0;

  constructor() {
    localStorage.clear();

    $('#listItem').hover(function() {
      $('#listItem').addClass('active');
    });
  }
}
