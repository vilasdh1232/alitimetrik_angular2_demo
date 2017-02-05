import { NgModule }      from '@angular/core';
import { DashboardComponent} from './dashboard.component';
import { LoginComponent} from './login.component';
import { routing } from './../../app.routs';

@NgModule({
    imports: [
        routing

    ],
    declarations: [DashboardComponent, LoginComponent],
    exports: [
        DashboardComponent,
        LoginComponent
    ]
})

export class UserModule { }