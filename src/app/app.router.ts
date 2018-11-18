import {ListComponent} from './pages/list/list.component';
import {RouterModule, Routes} from '@angular/router';
import {ItemComponent} from './pages/item/item.component';

export const router: Routes = [
    {
        path: '',
        redirectTo: '/list',
        pathMatch: 'full'
    },
    {
        path: 'item/:id',
        component: ItemComponent
    },
    {
        path: 'list',
        component: ListComponent
    },
];

export const AppRouterModule = RouterModule.forRoot(router);
