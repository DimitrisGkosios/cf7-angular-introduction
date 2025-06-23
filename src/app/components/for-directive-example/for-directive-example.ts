import { Component } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';
import { PersonTable } from "../person-table/person-table";

@Component({
  selector: 'app-for-directive-example',
  imports: [PersonTable],
  templateUrl: './for-directive-example.html',
  styleUrl: './for-directive-example.css'
})
export class ForDirectiveExample {
  users: Person[] = [
    {
  "givenName": "Cara",
  "surName": "Schoales",
  "email": "cschoales0@umn.edu",
  "age": 1,
  "address": "Suite 63"
}, {
  "givenName": "Siward",
  "surName": "Moule",
  "email": "smoule1@un.org",
  "age": 2,
  "address": "Room 632"
}, {
  "givenName": "Arlen",
  "surName": "Bugbird",
  "email": "abugbird2@ehow.com",
  "age": 3,
  "address": "Room 1074"
}, {
  "givenName": "Clerissa",
  "surName": "Greathead",
  "email": "cgreathead3@1und1.de",
  "age": 4,
  "address": "Suite 95"
}, {
  "givenName": "Rubin",
  "surName": "Piscopello",
  "email": "rpiscopello4@marriott.com",
  "age": 5,
  "address": "Room 1896"
}, {
  "givenName": "Aggi",
  "surName": "Lockey",
  "email": "alockey5@gnu.org",
  "age": 6,
  "address": "Room 231"
}, {
  "givenName": "Kim",
  "surName": "McCawley",
  "email": "kmccawley6@domainmarket.com",
  "age": 7,
  "address": "PO Box 88595"
}, {
  "givenName": "Silvie",
  "surName": "Nesey",
  "email": "snesey7@goo.ne.jp",
  "age": 8,
  "address": "Suite 88"
}, {
  "givenName": "Clerkclaude",
  "surName": "D'eath",
  "email": "cdeath8@posterous.com",
  "age": 9,
  "address": "PO Box 28135"
}, {
  "givenName": "Lusa",
  "surName": "Overall",
  "email": "loverall9@go.com",
  "age": 10,
  "address": "19th Floor"
}, {
  "givenName": "Penn",
  "surName": "Lahrs",
  "email": "plahrsa@pagesperso-orange.fr",
  "age": 11,
  "address": "Apt 1850"
}, {
  "givenName": "Michaelina",
  "surName": "Penniell",
  "email": "mpenniellb@spotify.com",
  "age": 12,
  "address": "20th Floor"
}, {
  "givenName": "Christoffer",
  "surName": "Mattevi",
  "email": "cmattevic@yolasite.com",
  "age": 13,
  "address": "Room 186"
}, {
  "givenName": "Eb",
  "surName": "Tremaine",
  "email": "etremained@ucoz.ru",
  "age": 14,
  "address": "Apt 1319"
}, {
  "givenName": "Nikoletta",
  "surName": "Haysey",
  "email": "nhayseye@google.cn",
  "age": 15,
  "address": "Suite 41"
}, {
  "givenName": "Sydel",
  "surName": "Nairn",
  "email": "snairnf@vkontakte.ru",
  "age": 16,
  "address": "Room 22"
}, {
  "givenName": "Sigismond",
  "surName": "Eliez",
  "email": "seliezg@hhs.gov",
  "age": 17,
  "address": "Suite 22"
}, {
  "givenName": "Charo",
  "surName": "Deans",
  "email": "cdeansh@nytimes.com",
  "age": 18,
  "address": "Suite 92"
}, {
  "givenName": "Shanda",
  "surName": "Vagg",
  "email": "svaggi@samsung.com",
  "age": 19,
  "address": "Suite 28"
}, {
  "givenName": "Blake",
  "surName": "Mosson",
  "email": "bmossonj@biblegateway.com",
  "age": 20,
  "address": "5th Floor"
}

  ]
}
