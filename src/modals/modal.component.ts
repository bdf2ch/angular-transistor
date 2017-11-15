import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { trigger, state, transition, animate, style } from '@angular/animations';
import { ModalsService } from './modals.service';
import { angularTransistorConfig } from '../angular-transistor.config';


@Component({
    selector: 'modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css'],
    animations: [
        trigger("fog", [
            state('shown', style({
                background: 'rgba(0, 0, 0, 0.3)'
            })),
            state('hidden', style({
                background: 'rgba(0, 0, 0, 0.0)'
            })),
            transition('hidden => shown', animate("200ms linear")),
            transition('shown => hidden', animate("200ms linear")),
        ]),
        trigger("modal", [
            state('shown', style({
                transform: 'scale(1.0)'
            })),
            state('hidden', style({
                transform: 'scale(0.01)'
            })),
            transition('hidden => shown', animate('100ms ease-in')),
            transition('shown => hidden', animate('100ms ease-out')),
        ])
    ]
})
export class ModalComponent implements  OnInit {

    /* Modal id */
    @Input() id: string;

    /* Modal z-index */
    @Input() depth: number;
    /* Modal width */
    @Input() width: number;
    /* Modal height */
    @Input() height: number;
    /* Modal header */
    @Input() header: boolean;
    /* Modal header caption */
    @Input() caption: string;
    /* Modal header icon */
    @Input() icon: string | null;
    /**/
    @Output() onClose: EventEmitter<any> = new EventEmitter();
    /**/
    private isOpened: boolean;
    /* Current status of modal - hidden or shown */
    private status: string;


    /**
     * Constructor
     * @param {ModalsService} modals
     */
    constructor(private modals: ModalsService) {
        this.width = angularTransistorConfig.modalDefaultWidht;
        this.height = angularTransistorConfig.modalDefaultHeight;
        this.depth = 0;
        this.header = true;
        this.icon = null;
        this.isOpened = false;
        this.status = 'hidden';
    };



    ngOnInit(): void {
        this.modals.register(this);
    };


    open(): void {
        this.isOpened = true;
        window.setTimeout(() => {
            this.status = 'shown';
        }, 50);
    };


    close(): void {
        this.status = 'hidden';
        window.setTimeout(() => {
            this.isOpened = false;
            this.onClose.emit();
        }, 200);
    };

}