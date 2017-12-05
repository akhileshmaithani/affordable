import { Routes } from '@angular/router';
import { DataResolver } from './app.resolver';
import { NoContentComponent } from './component/no-content/no-content.component';
import { AuthGuardService } from './middleware/auth-guard.service';

import { SignupComponent } from './component/auth/signup/signup.component';
import { SignInComponent } from "./component/auth/signin/signin.component";
import { UserVerificationComponent } from './component/auth/user-verification/user-verification.component';
import { AboutComponent } from './component/additional/about/about.component';
import { PressComponent } from "./component/additional/press/press.component";
import { PricingComponent } from "./component/additional/pricing/pricing.component";
import { BlogComponent } from "./component/additional/blog/blog.component";
import { ForgotPasswordComponent } from "./component/auth/forgotpassword/forgotpassword.component";
import { ChangePasswordComponent } from './component/auth/changepassword/changepassword.component';
import { ResetPasswordComponent } from "./component/auth/resetpassword/resetpassword.component";


export const ROUTES: Routes = [
    // Open Paths
    {path: 'about', component: AboutComponent},
    {path: 'sign-up', component: SignupComponent},
    {path: 'sign-in', component: SignInComponent},
    {path: 'user-verification/:id', component: UserVerificationComponent},
    {path: 'press', component: PressComponent},
    {path: 'pricing', component: PricingComponent},
    {path: 'blog', component: BlogComponent},

    {path: '', loadChildren: './component/home/home.module#HomeModule', canActivate: [AuthGuardService]},
    {path: 'home', loadChildren: './component/home/home.module#HomeModule'},

    {path: 'forgot-password', component: ForgotPasswordComponent},
    {path: 'reset-password', component: ResetPasswordComponent},
    {path: 'change-password', component: ChangePasswordComponent},

    {
        path: 'dashboard',
        loadChildren: './component/dashboard/dashboard.module#DashboardModule',
        // canActivate: [AuthGuardService]
    },
    // {
    //     path: 'financial-options',
    //     loadChildren: './component/financial-option/financial-option.module#FinancialOptionModule'
    // },
    {path: '**', component: NoContentComponent},
];
