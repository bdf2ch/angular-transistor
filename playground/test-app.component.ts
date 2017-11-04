import { Component } from '@angular/core';
import { TabsService } from '../src/tabs/tabs.service';
import { ModalsService } from '../src/modals/modals.service';


@Component({
    selector: 'test-app',
    templateUrl: './test-app.component.html'
})
export class TestAppComponent {

    constructor(private tabs: TabsService,
                private modals: ModalsService) {};

    selectFirstTab(): void {
        this.tabs.get('lol').tab('test1').select();
    };

    selectThirdTab(): void {
        this.tabs.get('lol').tab('test3').select();
    };

    disableFirstTab(): void {
        this.tabs.get('lol').tab('test1').disable();
    };

    enableFirstTab(): void {
        this.tabs.get('lol').tab('test1').enable();
    };


    openModal(): void {};

}