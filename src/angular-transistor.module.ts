import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tabs/tab/tab.component';
import { TabsService } from './tabs/tabs.service';
import 'font-awesome/css/font-awesome.css';


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        TabsComponent,
        TabComponent
    ],
    exports: [
        TabsComponent,
        TabComponent
    ],
    providers: [
        TabsService
    ]
})
export class AngularTransistorModule {}
