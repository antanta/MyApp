import { OnInit, Component, ViewEncapsulation } from '@angular/core';
import { Standard } from '../Domain/standard'
import { StandardReaderService } from '../Services/StandardReaderService'

@Component({
    selector: 'grid-component',
    templateUrl: '../Templates/Components/grid.component.html',
    styleUrls: ['../Styles/Components/grid.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class GridComponent implements OnInit {
    standards: Standard[] = [];

    constructor(private standardReaderService: StandardReaderService) {//TODO insert service to read data
        /* The parameter simultaneously defines a private standardReaderService property and identifies it as a StandardReaderService injection site */
    }

    ngOnInit() {
        this.standardReaderService
            .getStandards()
            .then(standards => this.standards = standards);
    }
}