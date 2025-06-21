import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PersonTable} from './components/person-table/person-table';

@Component({
  selector: 'app-root',
  imports: [PersonTable],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name = "Dimitris";

  person = {
    givenName:"Dimitris",
    surName:"Gkosios",
    age:"24",
    email:"dgkosios@gmail.com"
  }
}
