import { Component, ElementRef, Host, Optional, AfterViewChecked } from '@angular/core';
import { ModalComponent } from '../modal.component';


@Component({
    selector: 'modal-footer',
    templateUrl: './modal-footer.component.html',
    styles: [require('./modal-footer.component.css').toString()]
})
export class ModalFooterComponent implements AfterViewChecked {

    constructor(@Optional() @Host() private parent: ModalComponent,
                 private element: ElementRef) {
        if (!parent) {
            console.log('angular-transistor: \'modal-footer\' component must be used only inside \'modal\' component');
        }
    };


    ngAfterViewChecked(): void {
        console.log('modal-footer height: ', this.element.nativeElement.clientHeight);
        this.parent.footerHeight = this.element.nativeElement.clientHeight;
    };
}