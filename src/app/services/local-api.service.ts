import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
  GetMoviesByCategoryFromUserList () : Observable<Movie[]>{
    let categoryList = this.client.get<Movie[]>(environment.apiUrl + "Movies/GetMoviesByCategoryFromUserList");

    return categoryList;
  }



}
