import {HomeComponent} from './home.component';

export const routes = [
  {
    path: '', children: [
    {path: '', component: HomeComponent, pathMatch: 'full'},
    {path: 'apartment-list-view', loadChildren: './apartment-list-view/apartment-list-view.module#ApartmentListModule'},
    {path: 'apartment-list-view', loadChildren: './apartment-list-view/apartment-list-view.module#ApartmentListModule'},
    /*{
      path: 'individual-list-view',
      loadChildren: './individual-list-view/individual-list-view.module#IndividualListViewModule'
    },*/
    {
      path: 'individual-list-view/:apartmentAddress/:lat/:lng',
      loadChildren: './individual-list-view/individual-list-view.module#IndividualListViewModule'
    },
      {
          path: 'individual-list-view/:apartmentAddress',
          loadChildren: './individual-list-view/individual-list-view.module#IndividualListViewModule'
      }

  ]
  }
]
