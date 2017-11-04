import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { ModalsService } from './modals.service';


@Component({
    selector: 'modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css']
})
export class ModalComponent implements  OnInit {

    /**/
    @Input() id: string;
    /**/
    @Input() caption: string;
    /**/
    @Input() depth: number;
    /**/
    @Input() width: number;
    /**/
    @Input() height: number;
    /**/
    @Output() onClose: EventEmitter<any> = new EventEmitter();
    private isOpened: boolean;


    /**
     *
     * @param {ModalsService} modals
     */
    constructor(private modals: ModalsService) {
        this.isOpened = false;
    };


    ngOnInit(): void {
        this.modals.register(this);
    };


    open(): void {
        this.isOpened = true;
    };


    close(): void {
        this.isOpened = false;
        this.onClose.emit();
    };

}