import { Injectable } from '@angular/core';
import { Http, Response, RequestOptionsArgs } from '@angular/http';
import { Standard } from '../Domain/standard'
//import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise'; //!!!

@Injectable()
export class RandomFileGenerateService {
    private communicator: Http;

    constructor(communicator: Http) {
        this.communicator = communicator;
    }

    generateRandomFiles(numberOfFiles: number): Promise<string[]> {
        return this.communicator.get(`/randomFileGenerator/GenerateRandomFiles?numberOfFiles=${numberOfFiles}`)
            .toPromise()
            .then(res => {
                return res.json();
            })
            .catch(res3 => {
                return res3;
            });
    }
}