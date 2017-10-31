import { Component, Input } from '@angular/core';
import { TabComponent } from './tab/tab.component';


@Component({
    selector: 'tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.css']
})
export class TabsComponent {
    @Input() id: string = '';
    private tabs: TabComponent[] = [];


    registerTab(tab: TabComponent): void {
        this.tabs.push(tab);
    };
}