import {Component} from '@angular/core';
import {ApplicationService, UserModel} from '../../../services/application.service';

@Component({

    selector: 'app-landlord',
    templateUrl: './landlord.component.html',
    styleUrls: ['./landlord.component.scss']


})
export class LandlordComponent {
    userModel: UserModel;

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
