import { Injectable } from '@angular/core';
import { Http, Response, RequestOptionsArgs } from '@angular/http';
import { Standard } from '../Domain/standard'
import 'rxjs/add/operator/toPromise'; //!!!
import { FileMetadata } from './FileMetadata';

@Injectable()
export class RandomFileGenerateService {
    private communicator: Http;

    constructor(communicator: Http) {
        this.communicator = communicator;
    }

    generateRandomFiles(numberOfFiles: number): Promise<FileMetadata[]> {
        return this.communicator.get(`/randomFileGenerator/GenerateRandomFiles?numberOfFiles=${numberOfFiles}`)
            .toPromise()
            .then(res => {
                let result = <FileMetadata[]>res.json();
                this.fillPathForFile(result);
                return result;
            })
            .catch(res3 => {
                return res3;
            });
    }

    private fillPathForFile(files: FileMetadata[]): void {
        for (let i = 0; i < files.length; i++) {
            var curFile = files[i];
            curFile.Path = '/download/downloadfile?fileName=' + encodeURI(curFile.Name);
        }
    }
}