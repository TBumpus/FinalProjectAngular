import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from '../interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class LocalAPIService {

  constructor(private client:HttpClient) { }

  //Get all movies from user list
  GetAllMoviesFromUserList() : Observable<Movie[]>{
    let movieList = this.client.get<Movie[]>(environment.apiUrl + "Movies/GetAllMoviesFromUserList");

    return movieList;
  }

  //Get random movie for user
  GetRandomMovieFromUserList(){
    let randomMovie = this.client.get<Movie>(environment.apiUrl + "Movies/GetRandomMovieFromUserList");

    return randomMovie;
  }

  //Get movie list by category
  GetMoviesByCategoryFromUserList (category:number) : Observable<Movie[]>{
    let categoryList = this.client.get<Movie[]>(environment.apiUrl + "Movies/GetMoviesByCategoryFromUserList");

    return categoryList;
  }

  //Get random movie from category
  GetRandomMovieByCategoryFromUserList (category:number){
    let randomMovieByCategory = this.client.get<Movie>(environment.apiUrl + "Movies/GetRandomMovieByCategoryFromUserList");

    return randomMovieByCategory;
  }


  //Delete movie from movie list 
  DeleteMovieFromUserList(movie: Movie){
    let userDeleteMovie = this.client.delete<Movie>(environment.apiUrl + "Movies/DeleteMovieFromUserList"); 
    
    return userDeleteMovie; 
  }

  //Add movie to user list 
  AddMovieToUserList(movie: Movie){
    let userAddMovie = this.client.post<Movie>(environment.apiUrl + "Movies/AddMovieToUserList", movie);

    return userAddMovie; 
  }

  //Get users name 
  GetUsername(user: string){
    let userName = this.client.get<User>(environment.apiUrl + "Movies/GetUsername" + user); 

    return userName;
  }

  //Add new user 
  AddNewUser(user: User){
    let newUser = this.client.post<User>(environment.apiUrl + "Movies/AddNewUser", user); 

    return newUser; 
  }
}
