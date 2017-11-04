import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tabs/tab/tab.component';
import { TabsService } from './tabs/tabs.service';
import { ModalComponent } from './modals/modal.component';
import { ModalsService } from './modals/modals.service';
import './assets/styles/angular-transistor.css';
import 'font-awesome/css/font-awesome.css';



@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        TabsComponent,
        TabComponent,
        ModalComponent
    ],
    exports: [
        TabsComponent,
        TabComponent,
        ModalComponent
    ],
    providers: [
        TabsService,
        ModalsService
    ]
})
export class AngularTransistorModule {}
