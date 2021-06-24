import { Component, 
         Input, 
         Output,
         EventEmitter
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

    @Output() removePersonEvent = new EventEmitter();

    removePerson() {
        this.removePersonEvent.emit();
    }
}