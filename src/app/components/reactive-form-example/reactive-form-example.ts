import { Component, inject } from '@angular/core';
import { PersonTable } from '../person-table/person-table';
import { SimpleDatatable } from '../simple-datatable/simple-datatable';
import { EpersonReactiveForm } from '../eperson-reactive-form/eperson-reactive-form';
import { EPerson } from 'src/app/shared/interfaces/eperson';
import { PersonService} from 'src/app/shared/services/person.service';

@Component({
  selector: 'app-reactive-form-example',
  imports: [PersonTable, SimpleDatatable, EpersonReactiveForm],
  templateUrl: './reactive-form-example.html',
  styleUrl: './reactive-form-example.css'
})
export class ReactiveFormExample {
  personService = inject(PersonService)
  currentPerson: EPerson | undefined;
  persons: EPerson[]= [];

  onPerson(data: EPerson) {
    // console.log("Father", data);
    this.currentPerson = data;
    this.persons.push(data);
    this.personService.modifiedDataTable.set(true);
    // console.log("Father", this.persons)
  }
}
