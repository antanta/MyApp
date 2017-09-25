import { Injectable } from '@angular/core';
import { Http, Response, RequestOptionsArgs, Jsonp } from '@angular/http';
import { Standard } from '../Domain/standard'
//import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise'; //!!!

@Injectable()
export class StandardReaderService {
    private communicator: Jsonp;
    private standards: Standard[];

    constructor(communicator: Jsonp) {
        this.communicator = communicator;
    }

    getStandards(): Promise<Standard[]> {
        return this.communicator.get("http://localhost:62901/api/standard?callback=JSONP_CALLBACK")
            //.map(data => data)
            .toPromise()
            .then(res => {
                return res.json() as Standard[]
            });
    }

    getStandardsjQuery(): void {
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
    }
}