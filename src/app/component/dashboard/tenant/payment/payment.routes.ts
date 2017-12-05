import { PaymentComponent } from './payment.component';

export const routes = [
    {
        path: '', children: [
            { path: '', component: PaymentComponent, pathMatch: 'full' },
            { path: 'application-fee', loadChildren: './application-fee/application-fee.module#ApplicationFeeModule' },
            // {path:'request-tour-fee',loadChildren:'./request-tour-fee/request-tour-fee.module#RequestTourFeeModule'}
        ]
    }
]