import { Component, Input } from '@angular/core';
import { EPerson } from 'src/app/shared/interfaces/eperson';
import { Person } from 'src/app/shared/interfaces/person';

@Component({
  selector: 'app-person-table',
  imports: [],
  templateUrl: './person-table.html',
  styleUrl: './person-table.css'
})
export class PersonTable {
  @Input() personInput:Person | EPerson | undefined;
  name = "Thanasis"
  addressOReducation: string= ""

  person = {
    givenName: "Thanasis",
    surName: "Androutsos",
    age: 20,
    email: "thanasis@aueb.gr"
  }

  isPerson():boolean {
    if(this.personInput && 'address' in this.personInput){
      this.addressOReducation = this.personInput.address
    return 'address' in this.personInput;
    }
  return false;
  }

  isEPerson():boolean {
    if(this.personInput && 'education' in this.personInput){
      this.addressOReducation = this.personInput.education
      return 'education' in this.personInput;
  }
    return false;
  }
}
