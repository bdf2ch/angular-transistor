import { Component, ElementRef, Host, Optional, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { ModalComponent } from '../modal.component';


@Component({
    selector: 'modal-footer',
    templateUrl: './modal-footer.component.html',
    styles: [require('./modal-footer.component.css').toString()]
})
export class ModalFooterComponent implements AfterViewChecked {

    constructor(@Optional() @Host() private parent: ModalComponent,
                private element: ElementRef,
                private detector: ChangeDetectorRef) {
        if (!parent) {
            console.log('angular-transistor: \'modal-footer\' component must be used only inside \'modal\' component');
        }
    };


    ngAfterViewChecked(): void {
        console.log('modal-footer height: ', this.element.nativeElement.children[0].clientHeight);
        this.parent.footerHeight = this.element.nativeElement.children[0].clientHeight;
        this.detector.markForCheck();
    };
}