import { OnInit, Component, ViewEncapsulation } from '@angular/core';
import { Student } from '../Domain/student'
import { EntityComponentBase } from './entity.component.base';
import { GenericReaderService } from '../Services/GenericReaderService';

@Component({
    selector: 'students-component',
    templateUrl: '../Templates/Components/students.component.html',
    styleUrls: ['../Styles/Components/entity.component.base.css'],
    encapsulation: ViewEncapsulation.None
})
export class StudentsComponent extends EntityComponentBase<Student> implements OnInit {
    constructor(readerService: GenericReaderService<Student>) {
        super(readerService, 'Student');
    }
}