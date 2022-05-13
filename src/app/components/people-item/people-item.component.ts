import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from 'src/app/Person';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-people-item',
  templateUrl: './people-item.component.html',
  styleUrls: ['./people-item.component.css']
})
export class PeopleItemComponent implements OnInit {
@Input() person: Person;
@Output() onDeletePerson: EventEmitter<Person> = new EventEmitter()
faTimes=faTimes;
@Output() onToggleReminder: EventEmitter<Person> = new EventEmitter()


  constructor() { }

  ngOnInit(): void {
  }
onDelete(person){
  this.onDeletePerson.emit(person);
}
onToggle(person){
  this.onToggleReminder.emit(person)
}
}
