import { API_BASE_URL, API_PORT } from './api.server';

export const BASE: string = `http://${API_BASE_URL}:${API_PORT}`;

export const SIGNUP: string = `/api/signup`;
export const SIGNIN: string = `/api/authenticate`;
export const USER_VERIFICATION = `/api/userverification`;
export const CHANGE_PASSWORD = '';
export const FORGET_PASSWORD = '';
export const RESET_PASSWORD = '';
export const API = {
    SIGNUP,
    SIGNIN,
    USER_VERIFICATION,
    CHANGE_PASSWORD,
    FORGET_PASSWORD,
    RESET_PASSWORD
};
