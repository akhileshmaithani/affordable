import {DashBoardComponent} from './dashboard.component';


export const routes = [
    {
        path: '', children: [
        {path: '', component: DashBoardComponent},
        {path: 'landlord', loadChildren: './landlord/landlord.module#LandlordModule'},
        {path: 'tenant', loadChildren: './tenant/tenant.module#TenantModule'}
       
    ]
    },
];
