import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/user/login.component';
import { DashboardComponent } from './pages/user/dashboard.component';

const appRoutes: Routes = [
   
    {
        path: 'dashboard',
        component: DashboardComponent 
    },
    {
        path: 'user',
        component: LoginComponent 
    },
    {
        path: 'page1',
        component: DashboardComponent 
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);