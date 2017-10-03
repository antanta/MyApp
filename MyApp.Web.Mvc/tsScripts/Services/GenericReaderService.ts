import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GenericReaderService<T> {
    private communicator: Jsonp;
    public className: string;

    constructor(communicator: Jsonp) {
        debugger;
        this.communicator = communicator;
    }

    getEntities(): Promise<T[]> {
        debugger;
        return this.communicator.get("http://localhost:62901/api/" + this.className + "?callback=JSONP_CALLBACK")
            .toPromise()
            .then(res => {
                return res.json() as T[]
            });
    }

    //TODO API for CUD
}