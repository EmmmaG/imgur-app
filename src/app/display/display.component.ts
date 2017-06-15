import { Component, OnInit} from '@angular/core';
import { DisplayService } from './display.service';

@Component({
    moduleId:module.id,
    selector: 'display',
    templateUrl: './display.component.html',
    styleUrls: ['./display.component.css',]
})

export class displayComponent implements OnInit {
    data: any[];
    errorMessage: string;

    constructor(
        private displayService: DisplayService
    ){}

    getDatas(): void {
        this.displayService
            .getdata()
            .then(
                     data => this.data = data,
                     error => this.errorMessage = <any>error
            );
    }
    ngOnInit(): void {
        this.getDatas();
    }
}