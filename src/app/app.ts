import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
// import {PersonTable} from './components/person-table/person-table';
// import { Person } from './shared./intefaces/person';
// import { EventBindExample } from './components/event-bind-example/event-bind-example';
import { ListGroupMenu } from './components/list-group-menu/list-group-menu';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListGroupMenu],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // name = "Dimitris";

  // // Step1 : One way binding of data
  // person = {
  //   givenName:"Dimitris",
  //   surName:"Gkosios",
  //   age:"24",
  //   email:"dgkosios@gmail.com"
  // }

  // //Step 3: Component Input
  // person0: Person ={
  //   givenName :"Xristos",
  //   surName: "Fragkoudakis",
  //   age:55,
  //   email:"chfrag@aueb.gr",
  //   address: "Athens, Greece",
  // }

  // person1:Person ={
  //   givenName: "Giannis",
  //   surName: "Doe",
  //   age:32,
  //   email:"john@aueb.gr",
  //   address:"New York,Usa"
  // }

  
}
