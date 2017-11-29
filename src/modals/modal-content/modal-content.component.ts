import {
    Component, ElementRef, AfterViewInit, Host, Optional, AfterContentChecked,
    AfterViewChecked, Input, ChangeDetectorRef
} from '@angular/core';
import { ModalComponent } from '../modal.component';


@Component({
    selector: 'modal-content',
    templateUrl: './modal-content.component.html',
    styles: [require('./modal-content.component.css').toString()]
})
export class ModalContentComponent implements AfterViewChecked, AfterViewInit {
    @Input() height: number;

    ngAfterViewInit(): void {
        console.log('content-height afterViewInit', this.element.nativeElement.clientHeight);
    }


    constructor(@Optional() @Host() private parent: ModalComponent,
                private element: ElementRef,
    private detector: ChangeDetectorRef) {
        if (!parent) {
            console.log('angular-transistor: component \'modal-content\' must be used only inside \'modal\' component');
        }
        this.height = 0;
    };


    ngAfterViewChecked(): void {
        console.log(this.element.nativeElement.children[0]);
        console.log('content-height afterViewChecked', this.element.nativeElement.children[0].clientHeight);
        if (this.parent) {
            this.parent.contentHeight = this.element.nativeElement.children[0].clientHeight;
            this.parent.detector.detectChanges();
        }
        if (this.height === 0) {
            this.height = this.element.nativeElement.children[0].clientHeight;
            this.parent.detector.detectChanges();
        }
    };

}