import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Person } from '../../Person';
import {Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
@Component({
  selector: 'app-add-people',
  templateUrl: './add-people.component.html',
  styleUrls: ['./add-people.component.css']
})
export class AddPeopleComponent implements OnInit {
  @Output() onAddPerson: EventEmitter<Person> = new EventEmitter();
  
  text: string;
  day: string;
  reminder: boolean = false;
  subscription: Subscription;
  showAddNew: boolean;
  constructor(private uiService: UiService) { 
    
  this.subscription = this.uiService
    .onToggle()
    .subscribe(value => this.showAddNew=value);
  }
  ngOnInit(): void {
  }
  onSubmit(){
    if (!this.text) {
      alert('Please add a task')
      return;
    }
    //creando nuevo objeto para enviar al servicio
    const newPeople = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };
;
this.onAddPerson.emit(newPeople);
    // @todo-emit
    this.text = '';
   this.day = ''; 
    this.reminder= false;
  }
  }


