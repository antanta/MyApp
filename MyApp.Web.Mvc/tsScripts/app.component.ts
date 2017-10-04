import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: '../Templates/app.component.html',
    styleUrls: ['../Styles/app.component.css']
})
export class AppComponent {
    currentYear: string;
    constructor() {
        this.currentYear = String(new Date().getFullYear());
    }
}