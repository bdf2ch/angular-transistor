import { Component } from '@angular/core';
import { TabsService } from '../src/tabs/tabs.service';
import { ModalsService } from '../src/modals/modals.service';


@Component({
    selector: 'test-app',
    templateUrl: './test-app.component.html'
})
export class TestAppComponent {
    private trigger: boolean;

    constructor(private tabs: TabsService,
                private modals: ModalsService) {
        this.trigger = false;
    };

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


    openModal(): void {
        this.modals.get('test-modal').open();
    };

    closeModal(): void {
        this.modals.get('test-modal').close();
    };

    openSecondModal(): void {
        this.modals.get('second-test-modal').open();
    };

    closeSecondModal(): void {
        this.modals.get('second-test-modal').close();
    };


    switchTrigger(): void {
        this.trigger = !this.trigger;
    };


    openTriggerModal(): void {
        this.modals.get('trigger-modal').open();
    };

}