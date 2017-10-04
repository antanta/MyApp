import { OnInit, Component, ViewEncapsulation, Injectable } from '@angular/core';
import { Standard } from '../Domain/standard'
import { EntityComponentBase } from './entity.component.base';
import { GenericReaderService } from '../Services/GenericReaderService';

@Injectable()
export class StandardReader extends GenericReaderService<Standard> {

}

@Component({
    selector: 'standards-component',
    templateUrl: '../Templates/Components/standards.component.html',
    styleUrls: ['../Styles/Components/entity.component.base.css'],
    encapsulation: ViewEncapsulation.None
})
export class StandardsComponent extends EntityComponentBase<Standard> implements OnInit {
    constructor(readerService: StandardReader) {
        super(readerService);
    }
}