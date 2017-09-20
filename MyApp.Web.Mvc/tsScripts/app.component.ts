import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    //template: '<h1>Hello {{title}}</h1>',
    templateUrl: '../Templates/app.component.html',
    //styles: ['h2 {color: red}'],
    styleUrls: ['../Styles/app.component.css']
})
export class AppComponent {
    title = 'ASP.NET MVC 5 with Angular 4';
    skills = ['MVC 5', 'Angular 2', 'TypeScript', 'Visual Studio 2015'];
    myskills = this.skills[3];
}