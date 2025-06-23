import { Component, Input } from '@angular/core';
import { EPerson } from 'src/app/shared/interfaces/eperson';
import { sortBy } from 'lodash-es';

@Component({
  selector: 'app-simple-datatable',
  imports: [],
  templateUrl: './simple-datatable.html',
  styleUrl: './simple-datatable.css'
})
export class SimpleDatatable {
  @Input() data: EPerson[] | undefined;

  sortOrder = {
    givenName: 'none',
    surName: 'none',
    age: 'none',
    email: 'none',
    education: 'none'
  }

  sortData(sortKey: keyof EPerson) {
    console.log(sortKey);
  } 

  onPersonClicked(person:EPerson){
    console.log("Person>>",person)
  }
}
