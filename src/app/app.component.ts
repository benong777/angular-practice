import { Component } from '@angular/core';
import { Person } from './interfaces/person.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-practice';

  firstName = '';
  lastName = '';
  year: number = 0;

  dummyObj = { fName: 'firstNamePlaceholder',
               lName: 'lastNamePlaceholder',
               year: 2050 };

  persons: Person[] = [
    {
      fName: "Joe",
      lName: "Montana",
      year: 1990
    },
    {
      fName: "Steve",
      lName: "Young",
      year: 1995
    },
    {
      fName: "Tom",
      lName: "Brady",
      year: 2000
    }
  ];  

  
  addPerson() {
    this.persons.push({
      fName: this.firstName, 
      lName: this.lastName,
      year: this.year});
    
    this.firstName = '';
    this.lastName = '';
    this.year = 0;
  }

  removePerson(index: number) {
    this.persons.splice(index, 1);
  }

  updatePerson(index: number, updatedPerson: any) { 
    //this.persons.splice(index, 1, this.dummyObj);
    // console.log("Success!!!");
    console.log(updatedPerson);
    this.persons.splice(index, 1, updatedPerson);

  }
}