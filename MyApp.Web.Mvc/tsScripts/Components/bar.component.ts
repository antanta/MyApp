﻿/// <reference path ="../../Scripts/typings/jquery/jquery.d.ts"/> 

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Message } from 'primeng/components/common/api';

@Component({
    selector: 'bar-component',
    templateUrl: '../Templates/Components/bar.component.html',
    styleUrls: ['../Styles/Components/bar.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class BarComponent implements OnInit {

    value: number = 0;

    msgs: Message[];

    ngOnInit() {
        let interval = setInterval(() => {
            this.value = this.value + Math.floor(Math.random() * 10) + 1;
            if (this.value >= 100) {
                this.value = 100;
                this.msgs = [{ severity: 'info', summary: 'Success', detail: 'Process Completed' }];
                clearInterval(interval);
            }
        }, 500);
    }

}