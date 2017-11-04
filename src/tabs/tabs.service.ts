import { Injectable } from '@angular/core';
import { TabsComponent } from './tabs.component';


@Injectable()
export class TabsService {

    /* Array containing all registered tabs components */
    public tabs: TabsComponent[] = [];


    /**
     * Registering TabsComponent
     * @param {TabsComponent} tabs
     */
    register(tabs: TabsComponent): boolean {
        const findTabsById = (item: TabsComponent) => item.id === tabs.id;
        const result = this.tabs.find(findTabsById);
        if (result) {
            console.error('angular-transistor: tabs plugin with id \'' + tabs.id + '\' already exists');
            return false;
        } else {
            this.tabs.push(tabs);
            return true;
        }
    };


    /**
     * Getting tabs component by its id
     * @param {string} id
     * @returns {TabsComponent}
     */
    get(id: string): TabsComponent | null {
        const findTabById = (tabs: TabsComponent) => tabs.id === id;
        const tabs = this.tabs.find(findTabById);
        return tabs ? tabs : null;
    };
}