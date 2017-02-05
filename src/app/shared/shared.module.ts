import { NgModule }      from '@angular/core';
import { HeaderComponent} from './header.component';
import { SidebarComponent} from './sidebar.component';
@NgModule({
    imports: [

    ],
    declarations: [HeaderComponent, SidebarComponent],
    exports: [
        HeaderComponent,
        SidebarComponent
    ]
})

export class SharedModule { }