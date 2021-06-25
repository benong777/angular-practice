import { FormControl } from '@angular/forms';
import { Component, 
         OnInit,
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

export class ListItemComponent implements OnInit {
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
    @Output() updatePersonEvent = new EventEmitter<any>();

    ngOnInit() {
        // this.updatePersonEvent.emit("test");
    }

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
        //this.updatePersonEvent.emit("Success!!!");
        this.updatePersonEvent.emit({
            fName: this.person.fName,
            lName: this.person.lName,
            year:  this.person.year
        });
        this.editMode = false;
    }
    
}