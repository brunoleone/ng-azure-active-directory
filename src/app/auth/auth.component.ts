import { Component, OnInit } from '@angular/core';

import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-browser';
import { AppStateService } from '../services/app-state.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  result: AuthenticationResult | null;

  constructor(
    private msal: MsalService,
    private appState: AppStateService) {
    this.result = null;
  }

  ngOnInit(): void {
    
  }

}
