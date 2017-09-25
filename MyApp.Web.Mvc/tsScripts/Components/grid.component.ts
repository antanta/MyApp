import { OnInit, Component, ViewEncapsulation } from '@angular/core';

export interface Standard {
    Id: number;
    Name: string;
    brand?: string;
}

@Component({
    selector: 'grid-component',
    templateUrl: '../Templates/Components/grid.component.html',
    styleUrls: ['../Styles/Components/grid.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class GridComponent implements OnInit {
    standards: Standard[] = [];

    constructor() {//TODO insert service to read data
        
    }

    ngOnInit() {
        var that = this;

        $.ajax({
            url: 'http://localhost:62901/api/standard', //different domain
            dataType: 'jsonp',
            type: 'GET',
            crossDomain: true,
            success: function (data) {
                that.standards = data as Standard[];
            },
            error: function (jqXHR, status, error) {
                alert('error');
            }
        });
        //this.carService.getCarsLarge().then(standards => this.standards = standards);
    }
}