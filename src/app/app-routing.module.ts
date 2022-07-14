import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { AssignUpdateCategoryComponent } from './Components/assign-update-category/assign-update-category.component';
import { MainComponent } from './Components/main/main.component';
import { RandomMovieFromUserListByCategoryComponent } from './Components/random-movie-from-user-list-by-category/random-movie-from-user-list-by-category.component';
import { RandomMovieFromUserListComponent } from './Components/random-movie-from-user-list/random-movie-from-user-list.component';
import { SearchMovieResultComponent } from './Components/search-movie-result/search-movie-result.component';
import { SearchMovieComponent } from './Components/search-movie/search-movie.component';
import { UserMovieListComponent } from './Components/user-movie-list/user-movie-list.component';
import { UserMoviesByCategoryComponent } from './Components/user-movies-by-category/user-movies-by-category.component';

const routes: Routes = [
  { path: "main", component: MainComponent},
  { path: '', redirectTo:'main', pathMatch: 'full'},
  { path:"assignUpdateCategory", component:AssignUpdateCategoryComponent},
  { path:"randomMovieFromUserList", component:RandomMovieFromUserListComponent},
  { path:"randomMovieFromUserListByCategory", component:RandomMovieFromUserListByCategoryComponent},
  { path:"searchMovie", component:SearchMovieComponent},
  { path:"searchMovieResult", component:SearchMovieResultComponent},
  { path:"userMovieList", component:UserMovieListComponent, canActivate:[AuthGuard]},
  { path:"userMoviesByCategory", component:UserMoviesByCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
