import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from "../component/auth/signin/signin.component";
import { SignupComponent } from "../component/auth/signup/signup.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
    SimpleNotificationsModule
} from "angular2-notifications/dist";
import { AgmCoreModule } from "@agm/core";
import { AgmSnazzyInfoWindowModule } from "@agm/snazzy-info-window";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SimpleNotificationsModule.forRoot(),
        AgmCoreModule,
        AgmSnazzyInfoWindowModule

    ],
    declarations: [
        SignInComponent,
        SignupComponent
    ],
    exports: [
        SignInComponent,
        SignupComponent,
        AgmCoreModule,
        AgmSnazzyInfoWindowModule
    ]
})
export class SharedModule {
}
