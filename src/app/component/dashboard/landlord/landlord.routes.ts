
import {AddListingComponent} from './add-listing/add-listing.component';
import {LandlordComponent} from './landlord.component';

export const routes = [

    {
        path: '',
        children: [
            {path: '', component: LandlordComponent, pathMatch: 'full'},
            {path: 'add-listing', component: AddListingComponent}

        ]
    }


]
