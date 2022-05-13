import { Person } from '../../Person';
import { PeopleService } from 'src/app/services/people.service';

import { Component, OnInit, } from '@angular/core';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  people: Person[] = []; //people iterando en el ng
  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.peopleService.getPeople().subscribe((people) => this.people = people); //arreglo vacio que lleno con people en linea 13
  }
deletePerson(person: Person){
  this.peopleService.deletePerson(person).subscribe(() => (this.people = this.people.filter(p => p.id !== person.id)));
}
toggleReminder(person: Person) {
  person.reminder =!person.reminder;
  this.peopleService.updatePersonReminder(person).subscribe()
}
addPerson(person: Person) {
  // console.log(person);
  this.peopleService
  .addPerson(person)
  .subscribe((person) => (this.people.push(person)));
}
}
