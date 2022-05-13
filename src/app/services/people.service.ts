import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {  Observable} from 'rxjs'
import { Person } from '../Person';

const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
@Injectable({
  providedIn: 'root'
})
export class PeopleService {
private apiUrl = 'http://localhost:3000/people'

  constructor(private http:HttpClient) { }

  getPeople(): Observable<Person[]>{
    return this.http.get<Person[]>(this.apiUrl); //Llamando el http del constructor
  }

  deletePerson(person: Person): Observable<Person>{
    const url= `${this.apiUrl}/${person.id}`;
    return this.http.delete<Person>(url);
}

updatePersonReminder(person: Person):Observable<Person>{
  const url= `${this.apiUrl}/${person.id}`;
  return this.http.put<Person>(url, person, httpOptions);
}
addPerson(person: Person):Observable<Person> {
  return this.http.post<Person>(this.apiUrl, person, httpOptions);
}
}
