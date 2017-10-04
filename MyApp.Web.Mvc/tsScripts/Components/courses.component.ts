import { OnInit, Component, ViewEncapsulation, Injectable } from '@angular/core';
import { Course } from '../Domain/course';
import { EntityComponentBase } from './entity.component.base';
import { GenericReaderService } from '../Services/GenericReaderService';

@Injectable()
export class CourseReader extends GenericReaderService<Course> {

}

@Component({
    selector: 'students-component',
    templateUrl: '../Templates/Components/courses.component.html',
    styleUrls: ['../Styles/Components/entity.component.base.css'],
    encapsulation: ViewEncapsulation.None
})
export class CoursesComponent extends EntityComponentBase<Course> implements OnInit {
    constructor(readerService: CourseReader) {
        super(readerService);
    }
}