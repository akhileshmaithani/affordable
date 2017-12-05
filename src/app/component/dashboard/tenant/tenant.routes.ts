import {TenantComponent} from './tenant.component';
import {ListingComponent} from './listing/listing.component';
import {MyApplicationComponent} from './my-application/my-application.component';
import {PendingLeasesComponent} from './pending-leases/pending-leases.component';


export const routes = [
    {
        path: '', component: TenantComponent, children: [
        {path: '', component: ListingComponent},
        {path: 'listing', component: ListingComponent},
        {path: 'payment', loadChildren: './payment/payment.module#PaymentModule'},
        {path: 'my-application', component: MyApplicationComponent},
        {path: 'pending-lease', component: PendingLeasesComponent}

    ]
    }
]
