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
import { MainComponent } from './Components/main/main.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchMovieComponent } from './Components/search-movie/search-movie.component';
import { UserMovieListComponent } from './Components/user-movie-list/user-movie-list.component';
import { UserMoviesByCategoryComponent } from './Components/user-movies-by-category/user-movies-by-category.component';
import { RandomMovieFromUserListByCategoryComponent } from './Components/random-movie-from-user-list-by-category/random-movie-from-user-list-by-category.component';
import { AssignUpdateCategoryComponent } from './Components/assign-update-category/assign-update-category.component';
import { RandomMovieFromUserListComponent } from './Components/random-movie-from-user-list/random-movie-from-user-list.component';
import { SearchMovieResultComponent } from './Components/search-movie-result/search-movie-result.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, AuthButtonComponent, UserProfileComponent, MainComponent, SearchMovieComponent, UserMovieListComponent, UserMoviesByCategoryComponent, RandomMovieFromUserListByCategoryComponent, AssignUpdateCategoryComponent, RandomMovieFromUserListComponent, SearchMovieResultComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
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
