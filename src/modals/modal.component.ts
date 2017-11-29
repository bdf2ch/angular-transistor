import {
    Component, Input, Output, OnInit, AfterContentInit, EventEmitter,
    ChangeDetectionStrategy, ChangeDetectorRef, AfterViewInit, AfterContentChecked, ViewContainerRef, ViewChild
} from '@angular/core';
import { trigger, state, transition, animate, style } from '@angular/animations';
import { ModalsService } from './modals.service';
import { angularTransistorConfig } from '../angular-transistor.config';


@Component({
    selector: 'modal',
    templateUrl: './modal.component.html',
    styles: [require('./modal.component.css').toString()],
    changeDetection: ChangeDetectionStrategy.Default,
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
export class ModalComponent implements AfterViewInit, OnInit, AfterContentChecked {
    /* Modal id */
    @Input() id: string;

    /* Modal z-index */
    @Input() depth: number;

    /* Modal width */
    @Input() width: number;

    /* Modal height */
    //@Input() height: number;
    /* Modal header */
    @Input() header: boolean;

    /* Modal header caption */
    @Input() caption: string;

    /* Modal header icon */
    @Input() icon: string | null;

    /**/
    @Output() onClose: EventEmitter<any> = new EventEmitter();
    public modalHeight: number;
    public contentHeight: number;
    public footerHeight: number;
    /**/
    private isOpened: boolean;
    /* Current status of modal - hidden or shown */
    private status: string;
    private config: any = angularTransistorConfig;

    //@ViewChild('modal', { read: ViewContainerRef }) modal: ViewContainerRef;


    /**
     * Constructor
     * @param {ModalsService} modals
     */
    constructor(private modals: ModalsService,
                public detector: ChangeDetectorRef) {
        this.width = angularTransistorConfig.modalDefaultWidht;
        //this.height = 0;
        this.modalHeight = 0;
        this.depth = angularTransistorConfig.modalDefaultDepth;
        this.header = true;
        this.icon = null;
        this.contentHeight = 0;
        this.footerHeight = 0;
        this.isOpened = false;
        this.status = 'hidden';
    };


    ngAfterContentChecked(): void {
        console.log('modal content checked');
        console.log('modal height = ', this.contentHeight + this.footerHeight + 'px');
        //if (this.modal.element) {
        //    this.modal.element.nativeElement.height = this.contentHeight + this.footerHeight + 'px';
        //}
    };


    ngOnInit(): void {
        this.modals.register(this);
    };


    ngAfterViewInit(): void {
        //console.log(this.headerElement);
        //console.log('footer', this.footer);
        console.log('MODAL AFTER CONTENT CHECKED');
        this.detector.detectChanges();
    };





    open(): void {
        this.isOpened = true;
        window.setTimeout(() => {
            this.detector.detectChanges();
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