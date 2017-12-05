import { Component } from '@angular/core';
import {ApplicationService, UserModel} from '../../services/application.service';

@Component({
selector:'app-dashboard',
templateUrl:'./dashboard.component.html'

})

export class DashBoardComponent{
  userModel: UserModel;
    public geoAddressSettings: any = {
        showSearchButton: false,
        currentLocIconUrl: 'https://cdn4.iconfinder.com/data/icons/proglyphs-traveling/512/Current_Location-512.png',
        locationIconUrl: 'http://www.myiconfinder.com/uploads/iconsets/369f997cef4f440c5394ed2ae6f8eecd.png',
        recentStorageName: 'workAddressData',
        noOfRecentSearchSave: 8
    };
  constructor(private _applicationService: ApplicationService) {

    this._applicationService.$stream
      .subscribe(
        (state) => {
          if (state.isAuthenticated) {
            this.userModel = new UserModel(state.user);

          }
        }
      );
  }
}
