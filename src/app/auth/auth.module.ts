import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MsalService, MSAL_INSTANCE } from '@azure/msal-angular';
import { MSALInstanceFactore } from '../app.module';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  providers: [
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactore
    },
    MsalService
  ],
})
export class AuthModule { }
