import {
    Component, Input, Output, OnInit, AfterContentInit, EventEmitter, Renderer2,
    ChangeDetectionStrategy, ChangeDetectorRef, AfterViewInit, AfterContentChecked, ViewContainerRef, ViewChild,
    ContentChild, Optional
} from '@angular/core';
import { trigger, state, transition, animate, style } from '@angular/animations';
import { ModalsService } from './modals.service';
import { angularTransistorConfig } from '../angular-transistor.config';
import { ModalFooterComponent } from './modal-footer/modal-footer.component';
import { ModalContentComponent } from './modal-content/modal-content.component';


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
export class ModalComponent implements AfterContentChecked {

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

    @ViewChild('modal', { read: ViewContainerRef }) private modal: ViewContainerRef;
    @ContentChild(ModalFooterComponent) private footer: ModalFooterComponent;
    @ContentChild(ModalContentComponent) private content: ModalContentComponent;



    /**
     * Constructor
     * @param {ModalsService} modals
     */
    constructor(private modals: ModalsService,
                private renderer: Renderer2,
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


    ngOnInit(): void {
        this.modals.register(this);
    };


    ngAfterContentChecked(): void {
        if (this.modal) {
            if (this.content) {
                let contentHeight = this.content.element.nativeElement.children[0].clientHeight;
                this.renderer.setStyle(this.content.element.nativeElement.children[0], 'top', this.header ? '60px' : '0px');
                if (this.footer) {
                    let footerHeight = this.footer.element.nativeElement.children[0].clientHeight;
                    this.renderer.setStyle(this.content.element.nativeElement.children[0], 'bottom', this.footer.element.nativeElement.children[0].clientHeight + 'px');
                    this.renderer.setStyle(this.modal.element.nativeElement, 'height', this.header ? 60 + contentHeight + footerHeight + 'px' : contentHeight + footerHeight + 'px');
                } else {
                    this.renderer.setStyle(this.modal.element.nativeElement, 'height', this.header ? 60 + contentHeight + 'px' : contentHeight + 'px');
                }
            }
        }
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