import { NgModule }      from '@angular/core';
import { DashboardComponent} from './dashboard.component';
import { Page1Component} from './page1.component';
import { routing } from './../../app.routs';

@NgModule({
    imports: [
        routing

    ],
    declarations: [DashboardComponent, Page1Component],
    exports: [
        DashboardComponent,
        Page1Component
    ]
})

export class Page1Module { }