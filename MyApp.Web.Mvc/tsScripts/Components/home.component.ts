import { OnInit, Component, ViewEncapsulation } from '@angular/core';
import { RandomFileGenerateService } from '../Services/RandomFileGenerateService';
import { PanelModule } from 'primeng/components/panel/panel';
import { FileMetadata } from '../Services/FileMetadata';

@Component({
    templateUrl: '../Templates/Components/home.component.html',
    styleUrls: ['../Styles/Components/home.component.css']
})
export class HomeComponent {
    title: string = "MyApp";
    subtitle: string = 'ASP.NET MVC 5 with Angular 4';
}