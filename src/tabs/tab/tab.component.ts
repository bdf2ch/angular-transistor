import { Component, Input, Host, Optional, OnInit } from '@angular/core';
import { TabsComponent } from '../tabs.component';


@Component({
    selector: 'tab',
    templateUrl: './tab.component.html',
    styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
    /* Tab id */
    @Input() id: string;
    /* Tab caption */
    @Input() caption: string;
    /* Tab icon */
    @Input() icon: string;
    /* Tab title */
    @Input() title: string;
    /* Tab width */
    @Input() width: number;
    /* Is tab selected or not */
    private isSelected: boolean;


    /**
     * Component constructor.
     * @param {TabsComponent} parent
     */
    constructor(@Optional() @Host() private parent: TabsComponent) {
        if (!this.parent) {
            console.error('angular-transistor: \'tab\' component must be used only inside \'tabs\' component');
            return;
        }
        this.width = 0;
        this.isSelected = false;
    };


    /**
     * Tab component initialization.
     * Registering tab on parent tabs component.
     */
    ngOnInit(): void {
        if (this.parent) {
            this.parent.registerTab(this);
        }
    };


    /**
     * Mark tab as selected.
     */
    select(): void {
        this.isSelected = true;
    };


    /**
     * Mark tab as not selected.
     */
    deselect(): void {
        this.isSelected = false;
    };
}
