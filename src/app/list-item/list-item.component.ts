import { Component, 
         Input 
        } from '@angular/core';

import { Person } from '../interfaces/person.interface';

@Component({
    selector: 'app-list-item',
    templateUrl: './list-item.component.html',
    styleUrls: ['./list-item.component.css']
})

export class ListItemComponent {
    @Input() person: Person = {
        fName: '',
        lName: '',
        year: 0
    }

    removePerson(event: number) {

    }
}