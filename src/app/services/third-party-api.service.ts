import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from '../interfaces/movie';
import { MovieAPI } from '../interfaces/movie-api';
import { Result } from '../interfaces/result';

@Injectable({
  providedIn: 'root'
})
export class ThirdPartyApiService {

  constructor(private client:HttpClient) { }

  SearchThirdParty(searchTerm:string) : Observable<MovieAPI>{
    let movieList = this.client.get<MovieAPI>(environment.apiUrl + "Movies/SearchThirdParty?searchTerm="+searchTerm);


    return movieList;
  }
}
