import { NgModule } from '@angular/core';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tabs/tab/tab.component';


@NgModule({
    declarations: [
        TabsComponent,
        TabComponent
    ],
    exports: [
        TabsComponent,
        TabComponent
    ],
    providers: [

    ]
})
export class AngularTransistorModule {}
