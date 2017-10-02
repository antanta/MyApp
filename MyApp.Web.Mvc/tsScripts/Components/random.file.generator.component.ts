import { OnInit, Component, ViewEncapsulation } from '@angular/core';
import { RandomFileGenerateService } from '../Services/RandomFileGenerateService';
import { PanelModule } from 'primeng/components/panel/panel';

@Component({
    selector: 'random-file-generator-component-component',
    templateUrl: '../Templates/Components/random.file.generator.component.html',
    styleUrls: ['../Styles/Components/random.file.generator.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class RandomFileGeneratorComponent {
    blockedDocument: boolean = false;
    private maxNumberOfFiles: number = 10;
    private numberOfFiles: string;
    private filesMetadata: string[];

    constructor(private randomFileGenerateService: RandomFileGenerateService) {
    }

    onGenerateClick() {
        var t: PanelModule;
        let num: number = parseInt(this.numberOfFiles);

        if (isNaN(num)) {
            return;
        }

        if (num > this.maxNumberOfFiles) {
            num = this.maxNumberOfFiles;
            this.numberOfFiles = String(this.maxNumberOfFiles);
        }

        var that = this;
        this.blockedDocument = true;
        this.randomFileGenerateService
            .generateRandomFiles(num)
            .then(function (res) {
                that.filesMetadata = res;
                that.blockedDocument = false;
            });        
    }
}