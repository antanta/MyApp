import { OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import { GenericReaderService } from '../Services/GenericReaderService';

export class EntityComponentBase<T> implements OnInit {
    protected entities: T[] = [];
    protected readerService: GenericReaderService<T>;

    constructor(readerService: GenericReaderService<T>) {
        this.readerService = readerService;
    }

    ngOnInit() {
        var that = this;
        this.readerService.getEntities()
            .then(function (res) {
                that.entities = res;
            });
    }

    //TODO base CRUD logic
}