import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { TabComponent } from './tab/tab.component';
import { TabsService } from './tabs.service';


@Component({
    selector: 'tabs',
    templateUrl: './tabs.component.html',
    //styleUrls: ['./tabs.component.css']
    styles: [require('./tabs.component.css').toString()]
})
export class TabsComponent implements OnInit, OnDestroy {
    /* Tabs id */
    @Input() id: string = '';
    /* Array of containing tabs */
    public tabs: TabComponent[] = [];
    /* Is component enabled */
    //public isEnabled: boolean;


    /**
     * Constructor
     * @param {TabsService} tabsService
     */
    constructor(private tabsService: TabsService) {
        //this.isEnabled = true;
    }


    /**
     * Component initialization
     */
    ngOnInit(): void {
        //this.isEnabled = this.tabsService.register(this);
    };


    ngOnDestroy(): void {
        //this.isEnabled = false;
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
            const firstEnabledTab = (item: TabComponent) => !item.disabled;
            const foundedFirstEnabledTab = this.tabs.find(firstEnabledTab);
            if (foundedFirstEnabledTab) {
                foundedFirstEnabledTab.select();
            }
            return true;
        }
    };


    /**
     * Returns tab with specified id otherwise null
     * @param {string} tabId
     * @returns {TabComponent | null}
     */
    tab(tabId: string): TabComponent | null {
        const findTabById = (tab: TabComponent) => tab.id === tabId;
        const result = this.tabs.find(findTabById);
        return result ? result : null;
    };
}