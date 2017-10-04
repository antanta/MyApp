import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GenericReaderService<T> {
    private communicator: Jsonp;

    constructor(communicator: Jsonp) {
        this.communicator = communicator;
    }

    getEntities(): Promise<T[]> {
        return this.communicator.get("http://localhost:62901/api/" + this.className() + "?callback=JSONP_CALLBACK")
            .toPromise()
            .then(res => {
                return res.json() as T[]
            });
    }

    private className(): string {
        var myString = this.constructor.name;
        var myRegexp = /^(.*?)(?:Reader)$/g;
        var match = myRegexp.exec(myString);
        if (match.length > 1) {
            return match[1];
        } else {
            throw Error("Invalid implementation for GenericReaderService<T>");
        }
    }

    //TODO API for CUD
}