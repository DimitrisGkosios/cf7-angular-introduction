import { Component, EventEmitter, Input, Output, effect ,inject } from '@angular/core';
import { EPerson } from 'src/app/shared/interfaces/eperson';
import { sortBy } from 'lodash-es';
import { PersonService } from 'src/app/shared/services/person.service';

@Component({
  selector: 'app-simple-datatable',
  imports: [],
  templateUrl: './simple-datatable.html',
  styleUrl: './simple-datatable.css'
})
export class SimpleDatatable {
  @Input() data: EPerson[] | undefined;
  @Output() personClicked = new EventEmitter<EPerson>()

  personService = inject(PersonService)

  epersonData : EPerson[] | undefined ;

  constructor () {
    effect(() =>{
      if(this.personService.modifiedDataTable()){
        console.log("SIGNAL",this.data)
        this.epersonData = this.data
      }
      this.personService.modifiedDataTable.set(false);
    })
  }

  ngOnInit() {
    this.epersonData = this.data;
  }
  sortOrder = {
    givenName: 'none',
    surName: 'none',
    age: 'none',
    email: 'none',
    education: 'none'
  }

  

  sortData(sortKey: keyof EPerson): void {
    // console.log(sortKey);
    this.epersonData = this.data;
    console.log("1>>>", this.data)

    if(this,this.sortOrder[sortKey]==='asc'){
      this.sortOrder[sortKey] = 'desc'
      this.epersonData = sortBy(this.data, sortKey).reverse();
    } else {
      this.sortOrder[sortKey] = 'asc';
      this.epersonData = sortBy(this.data, sortKey);
    }

    for(let key in this.sortOrder) {
      if(key !== sortKey){
        this.sortOrder[key as keyof EPerson] = 'none'
      }
    }
    console.log("Simple DataTable", this.data);
  } 

  sortSign(sortKey: keyof EPerson){
    if(this.sortOrder[sortKey]=== 'asc')return '\u2191'
    else if(this.sortOrder[sortKey]=== 'desc') return '\u2193'
    else return '';
  }

  onPersonClicked(person: EPerson){
    console.log("Person>>",person);
    this.personClicked.emit(person);
  }
}
