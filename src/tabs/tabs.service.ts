import { Injectable } from '@angular/core';
import { TabsComponent } from './tabs.component';


@Injectable()
export class TabsService {

    /* Array containing all registered tabs components */
    private tabs: TabsComponent[] = [];


    /**
     * Registering TabsComponent
     * @param {TabsComponent} tabs
     */
    register(tabs: TabsComponent): void {
        this.tabs.push(tabs);
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