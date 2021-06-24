import { FormControl } from '@angular/forms';
import { Component, 
         Input, 
         Output,
         EventEmitter,
        } from '@angular/core';

import { Person } from '../interfaces/person.interface';

@Component({
    selector: 'app-list-item',
    templateUrl: './list-item.component.html',
    styleUrls: ['./list-item.component.css']
})

export class ListItemComponent {
    editMode = false;
    
    // @Input() person: Person = {
    //     fName: '',
    //     lName: '',
    //     year: 0
    // }
    @Input() person = {
        fName: '',
        lName: '',
        year: 0
    };

    @Output() removePersonEvent = new EventEmitter();
    @Output() updatePersonEvent = new EventEmitter();

    removePerson() {
        this.removePersonEvent.emit();
    }

    editPerson() {
        this.editMode = true;
    }

    cancelEditPerson() {
        this.editMode = false;
    }

    updatePerson() {
        this.updatePersonEvent.emit();
        this.editMode = false;
    }
    
}