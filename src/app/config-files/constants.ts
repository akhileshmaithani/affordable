import { animate, style, transition, trigger } from "@angular/animations";

export const TOKEN = {
    KEY: 'token'
};

export const REFRESH_TOKEN = {
    KEY: 'refresh_token'
};
export const API_RESPONSE = {
    EXCEPTION: 500,
    SUCCESS: 1,
    EXIST_BUT_NOT_ACTIVE: 1,
    ALREADY_EXIST: 0,
    NOT_EXIST: 0,
    OK: 200,
    CREATED: 201
};
export const USER_TYPE = {
    ADMIN: 'ADMIN',
    LANDLORD: 'LANDLORD',
    TENANT: 'TENANT'
}
export const DEFAULT_NOTIFICATION_OPTIONS = {
    timeOut: 5000,
    showProgressBar: true,
    pauseOnHover: false,
    clickToClose: false,
    maxLength: 100
};


const TENANT_DASHBOARD = '/dashboard/tenant';
const LANDLORD_DASHBOARD = '/dashboard/landlord';

const NON_AUTHORIZED_ROUTE = 'home';
export const ROUTES = {
    TENANT_DASHBOARD,
    LANDLORD_DASHBOARD,
    NON_AUTHORIZED_ROUTE

};

export const Animation = trigger('dialog', [
    transition('void => *', [
        style({transform: 'scale3d(.3, .3, .3)'}),
        animate(200)
    ]),
    transition('* => void', [
        animate(100, style({transform: 'scale3d(.0, .0, .0)'}))
    ])
])
