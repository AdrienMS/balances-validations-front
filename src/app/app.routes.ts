import { Routes } from '@angular/router';

import { LayoutComponent } from '@core/components';

export const routes: Routes = [
    { 
        path: '', 
        component: LayoutComponent,
        children: [
            { path: '', loadChildren: () => import('./movement/movement.module').then((m) => m.MovementModule) },
        ],
    }
];
