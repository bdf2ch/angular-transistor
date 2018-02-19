import {
    Component, Input, Output, EventEmitter, Renderer2, AfterViewChecked, ViewContainerRef, ViewChild, OnInit,
    OnDestroy
} from '@angular/core';
import { trigger, state, transition, animate, style } from '@angular/animations';
import { ModalsService } from './modals.service';
import { angularTransistorConfig } from '../angular-transistor.config';


@Component({
    selector: 'modal',
    templateUrl: './modal.component.html',
    styles: [require('./modal.component.css').toString()],
    animations: [
        trigger('fog', [
            state('shown', style({
                background: 'rgba(0, 0, 0, 0.3)'
            })),
            state('hidden', style({
                background: 'rgba(0, 0, 0, 0.0)'
            })),
            transition('hidden => shown', animate('200ms linear')),
            transition('shown => hidden', animate('200ms linear')),
        ]),
        trigger('modal', [
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
export class ModalComponent implements AfterViewChecked, OnInit, OnDestroy {
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
    public modalHeight: number;
    public contentHeight: number;
    public footerHeight: number;
    /**/
    private isOpened: boolean;
    /* Current status of modal - hidden or shown */
    private status: string;
    // private footer: boolean;
    private config: any = angularTransistorConfig;
    private isHeader: boolean;

    @ViewChild('modal', { read: ViewContainerRef }) private modal: ViewContainerRef;
    @ViewChild('content', { read: ViewContainerRef }) private content: ViewContainerRef;



    /**
     * Constructor
     * @param {ModalsService} modals
     */
    constructor(private modals: ModalsService,
                private renderer: Renderer2) {
        this.width = angularTransistorConfig.modalDefaultWidht;
        this.height = 0;
        this.depth = angularTransistorConfig.modalDefaultDepth;
        this.modalHeight = 0;

        this.header = true;
        this.icon = null;
        this.contentHeight = 0;
        this.footerHeight = 0;
        // this.footer = false;
        this.isOpened = false;
        this.status = 'hidden';

        this.isHeader = true;
    };


    /**
     * Инициализация компонента
     */
    ngOnInit(): void {
        this.modals.register(this);
    };


    /**
     * Удаление компонента
     */
    ngOnDestroy(): void {
        this.modals.delete(this);
    };


    ngAfterViewChecked(): void {
        if (this.modal) {
            this.renderer.setStyle(
                this.content.element.nativeElement,
                'height',
                this.header ? this.height - 60 : this.height
            );
        }
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
