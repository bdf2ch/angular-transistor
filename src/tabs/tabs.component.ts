import { Component, Input, OnInit } from '@angular/core';
import { TabComponent } from './tab/tab.component';
import { TabsService } from './tabs.service';


@Component({
    selector: 'tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
    /* Tabs id */
    @Input() id: string = '';
    /* Array of containing tabs */
    private tabs: TabComponent[] = [];


    constructor(private tabsService: TabsService) {}


    ngOnInit(): void {
        this.tabsService.register(this);
    };


    /**
     * Register new tab
     * @param {TabComponent} tab
     */
    registerTab(tab: TabComponent): boolean {
        const findTabById = (item: TabComponent) => item.id === tab.id;
        const foundedTab = this.tabs.find(findTabById);
        if (foundedTab) {
            console.error('angular-transistor: tab with id \'' + tab.id + '\' already exists');
            return false;
        } else {
            this.tabs.push(tab);
            console.log(this.tabs);
            this.selectTab(this.tabs[0]);
            return true;
        }
    };


    /**
     * Select tab
     * @param {TabComponent} tab
     * @returns {TabComponent}
     */
    selectTab(tab: TabComponent): TabComponent | null {
        this.tabs.forEach((item: TabComponent) => {
            if (item.id === tab.id) {
                tab.select();
                return tab;
            } else {
                item.deselect();
            }
        });
        return null;
    };
}