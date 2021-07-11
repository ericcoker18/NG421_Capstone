import { Component, OnInit } from '@angular/core';
import {IPerson} from "../interfaces/i-person";
import {PeopleService} from "../services/people.service";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  people: IPerson[] = [];
  newPerson: IPerson = {
    firstName: '',
    lastName: '',
    age: 0,
    isFriend: false
  }
  constructor(private peopleService: PeopleService) { }

  async ngOnInit() {
    this.people = await this.peopleService.getPeople();
  }

  async save() {
    let person = await this.peopleService.addPerson(this.newPerson);
    this.people.push(person);
  }

}
