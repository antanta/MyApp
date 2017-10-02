import { Component } from '@angular/core';
import { Http, Response, Jsonp, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { HttpParams } from '@angular/common/http'
import { RandomFileGenerateService } from './Services/RandomFileGenerateService';

@Component({
    selector: 'my-app',
    templateUrl: '../Templates/app.component.html',
    styleUrls: ['../Styles/app.component.css']
})
export class AppComponent {
    private communicator: Jsonp;

    title = 'ASP.NET MVC 5 with Angular 4';
    name: string;
    message: string;

    constructor(communicator: Http, private sender: RandomFileGenerateService) {
        this.communicator = communicator;
    }
    onClick() {
        this.message = 'Hello ' + this.name;
    }
}