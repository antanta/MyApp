import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: '../Templates/app.component.html',
    styleUrls: ['../Styles/app.component.css']
})
export class AppComponent {
    title = 'ASP.NET MVC 5 with Angular 4';
    name: string;
    message: string;
    onClick() {
        this.message = 'Hello ' + this.name;
        debugger;
        $.ajax({
            url: 'http://localhost:9000/api/randomfilegenerator/GenerateRandomFiles', //different domain
            dataType: 'jsonp',
            type: 'GET',
            crossDomain: true,
            success: function (data) {
                debugger;
            },
            error: function (jqXHR, status, error) {
                debugger;
            }
        });


    }
}