import { Component, Input, Host, Optional, OnInit } from '@angular/core';
import { TabPlugin } from './tab.model';
import { TabsComponent } from '../tabs.component';


@Component({
    selector: 'tab',
    templateUrl: './tab.component.html',
    styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
    @Input() id: string;
    @Input() caption: string;
    model: TabPlugin;


    /**
     * Component constructor
     * @param {TabsComponent} tabs
     */
    constructor(@Optional() @Host() private tabs: TabsComponent) {
        console.log('host', this.tabs);
        if (!this.tabs) {
            console.error('angular-transistor: \'tab\' component must be used only inside \'tabs\' component');
            return;
        }
    };


    ngOnInit(): void {
        if (this.tabs) {
            this.tabs.registerTab(this);
        }
    };
}
