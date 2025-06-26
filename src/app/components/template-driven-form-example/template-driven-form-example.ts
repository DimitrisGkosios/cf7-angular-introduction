import { Component } from '@angular/core';
import { EpersonTemplateDrivenForm } from '../eperson-template-driven-form/eperson-template-driven-form';
import { PersonTable } from '../person-table/person-table';
import { SimpleDatatable } from '../simple-datatable/simple-datatable';
import { EPerson } from 'src/app/shared/interfaces/eperson';

@Component({
  selector: 'app-template-driven-form-example',
  imports: [EpersonTemplateDrivenForm , PersonTable, SimpleDatatable],
  templateUrl: './template-driven-form-example.html',
  styleUrl: './template-driven-form-example.css'
})
export class TemplateDrivenFormExample {
  persons: EPerson[] = [];

  onPerson(data: EPerson) {
    this.persons.push(data)
    console.log("Father", this.persons);
  }
}
