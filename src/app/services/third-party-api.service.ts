import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from '../interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class ThirdPartyApiService {

  constructor(private client:HttpClient) { }

  SearchThirdParty() : Observable<Movie[]>{
    let movieList = this.client.get<Movie[]>(environment.apiUrl + "Movies/SearchThirdParty");

    return movieList;
  }
}
