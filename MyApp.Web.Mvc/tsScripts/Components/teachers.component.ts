import { OnInit, Component, ViewEncapsulation, Injectable } from '@angular/core';
import { Teacher } from '../Domain/teacher';
import { EntityComponentBase } from './entity.component.base';
import { GenericReaderService } from '../Services/GenericReaderService';

@Injectable()
export class TeacherReader extends GenericReaderService<Teacher> {

}

@Component({
    selector: 'teacher-component',
    templateUrl: '../Templates/Components/teachers.component.html',
    styleUrls: ['../Styles/Components/entity.component.base.css'],
    encapsulation: ViewEncapsulation.None
})
export class TeachersComponent extends EntityComponentBase<Teacher> implements OnInit {
    constructor(readerService: TeacherReader) {
        super(readerService);
    }
}