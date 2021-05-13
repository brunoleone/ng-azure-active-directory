import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MsalModule, MsalService, MSAL_INSTANCE } from '@azure/msal-angular';
import { IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

export function MSALInstanceFactore(): IPublicClientApplication {
  return new PublicClientApplication({
    auth: {
      clientId: '2bc815ef-5d51-41fb-98da-6ec98cdebb30',
      redirectUri: 'http://localhost:4200'
    }
  });
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MsalModule
  ],
  providers: [
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactore
    },
    MsalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
