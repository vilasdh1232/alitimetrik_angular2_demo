import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page1Component } from './pages/page1/page1.component';
import { DashboardComponent } from './pages/page1/dashboard.component';

const appRoutes: Routes = [

    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'page1',
        component: Page1Component
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);