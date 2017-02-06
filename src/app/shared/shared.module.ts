import { NgModule }      from '@angular/core';
//import { Router, ActivatedRoute, Params, NavigationStart } from '@angular/router';
import { routing } from './../app.routs';

import { HeaderComponent} from './header.component';
import { SidebarComponent} from './sidebar.component';
@NgModule({
    imports: [
        routing

    ],
    declarations: [HeaderComponent, SidebarComponent],
    exports: [
        HeaderComponent,
        SidebarComponent
    ]
})

export class SharedModule { }