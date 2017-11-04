import { Component, Input, Output, Host, Optional, OnInit, EventEmitter } from '@angular/core';
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
    /* Is tab disabled */
    @Input() disabled: boolean;
    /* Tab select event */
    @Output() onSelect: EventEmitter<any> = new EventEmitter();
    /* Tab deselect event */
    @Output() onDeselect: EventEmitter<any> = new EventEmitter();
    /* Tab enable event */
    @Output() onEnable: EventEmitter<any> = new EventEmitter();
    /* Tab disable event */
    @Output() onDisable: EventEmitter<any> = new EventEmitter();
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
        this.disabled = false;
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
     * Marks tab as selected and emits onSelect event.
     */
    select(): void {
        if (!this.disabled) {
            this.isSelected = true;
            this.onSelect.emit();
            this.parent.tabs.forEach((item: TabComponent) => {
                if (item.id !== this.id) {
                    item.deselect();
                }
            });
        }
    };


    /**
     * Marks tab as not selected and emits onDeselect event.
     */
    deselect(): void {
        this.isSelected = false;
        this.onDeselect.emit();
    };


    /**
     * Marks tab as enabled and emits onEnable event.
     */
    enable(): void {
        this.disabled = false;
        this.onEnable.emit();
    };


    /**
     * Marks tab as disabled and emits onDisable event.
     * Selects first tab that is not disabled.
     */
    disable(): void {
        this.disabled = true;
        this.onDisable.emit();
        const firstEnabledTab = (item: TabComponent) => !item.disabled;
        const foundedFirstEnabledTab = this.parent.tabs.find(firstEnabledTab);
        if (foundedFirstEnabledTab) {
            foundedFirstEnabledTab.select();
        }
    };
}
