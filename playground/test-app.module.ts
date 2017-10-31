import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularTransistorModule } from '../src/angular-transistor.module';
import { TestAppComponent } from './test-app.component';


@NgModule({
    imports: [
        BrowserModule,
        AngularTransistorModule
    ],
    declarations: [
        TestAppComponent,
    ],
    bootstrap: [
        TestAppComponent
    ]
})
export class TestAppModule {}
