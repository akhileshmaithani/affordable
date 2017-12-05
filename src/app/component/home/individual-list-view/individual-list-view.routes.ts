import { IndividualListComponent } from './individual-list-view.component';

export const routes = [
    {
        path: '', children: [
            { path: '', component: IndividualListComponent, pathMatch: 'full' },
            { path: 'apply', loadChildren: './apply-for-apartment/apply-for-apartment.module#ApplyApartmentModule' },
            { path: 'request-tour', loadChildren: './request-tour/request-tour.module#RequestTourModule' }
            // { path: 'share', loadChildren: './share/'}    
        ]
    }


]