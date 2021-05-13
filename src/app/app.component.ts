import { Component, OnInit } from '@angular/core';

import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-active-directory';

  result: AuthenticationResult | null;

  constructor(private msal: MsalService) {
    this.result = null;
  }

  ngOnInit(): void {
    this.msal.instance.handleRedirectPromise().then(res => {
      if (res != null && res.account != null) {
        this.msal.instance.setActiveAccount(res.account);
        // this.appState.setToken(res.accessToken);
        this.result = res;
      }
    });
  }

  isLoggedin(): boolean {
    // return this.msal.instance.getActiveAccount() != null;
    return true;
  }

  signin() {
    this.msal.loginRedirect();
  }

  signout() {
    this.msal.logout();
  }
}
