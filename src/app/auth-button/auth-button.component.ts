import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-auth-button',
  template: `
    <ng-container *ngIf="auth.isAuthenticated$ | async; else loggedOut">
      <button class="login" (click)="auth.logout({ returnTo: document.location.origin })">
        Log out
      </button>
    </ng-container>

    <ng-template #loggedOut>
      <button class="login" (click)="auth.loginWithRedirect()">Log in</button>
    </ng-template>
  `,
  styleUrls: ['./auth-button.component.css']
})
export class AuthButtonComponent {
  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) {}
}