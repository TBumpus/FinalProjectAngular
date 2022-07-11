import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';
import { AuthButtonComponent } from './auth-button/auth-button.component';
import { UserProfileComponent } from './user-profile/user-profile.component'
;
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHttpInterceptor } from '@auth0/auth0-angular';

@NgModule({
  declarations: [AppComponent, AuthButtonComponent, UserProfileComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AuthModule.forRoot({
      // The domain and clientId were configured in the previous chapter
      domain: 'dev-4wz8qq0v.us.auth0.com',
      clientId: 'rprzbyGH110zVyEUrYdUQfIcmn48g1t1',
    
      // Request this audience at user authentication time
      audience: 'https://final-project-api',
    
      // Request this scope at user authentication time
      scope: 'read:current_user',
    
      // Specify configuration for the interceptor              
      httpInterceptor: {
        allowedList: [
          {

            //might have to change this around for working locally
            uri: 'https://finalproject20220629195153.azurewebsites.net/*',
            tokenOptions: {
              // The attached token should target this audience
              audience: 'https://final-project-api',

            }
          }
        ]
      }
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
