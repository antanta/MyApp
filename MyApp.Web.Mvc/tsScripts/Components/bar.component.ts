/// <reference path ="../../Scripts/typings/jquery/jquery.d.ts"/> 

import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/components/common/api';

@Component({
    selector: 'bar-component',
    templateUrl: '../Templates/Components/bar.component.html'
})
export class BarComponent {

    value: number = 0;

    msgs: Message[];

    constructor() {
        debugger;

        $.ajax({
            url: 'http://localhost:62901/api/student', //different domain
            dataType: 'jsonp',
            type: 'GET',
            crossDomain: true,
            success: function (data) {
                alert('success:' + data);
            },
            error: function (jqXHR, status, error) {
                alert('error');
            }
        });
    }

    ngOnInit() {
        let interval = setInterval(() => {
            this.value = this.value + Math.floor(Math.random() * 10) + 1;
            if (this.value >= 100) {
                this.value = 100;
                this.msgs = [{ severity: 'info', summary: 'Success', detail: 'Process Completed' }];
                clearInterval(interval);
            }
        }, 2000);
    }

}