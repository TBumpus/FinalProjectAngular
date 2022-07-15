import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from '../interfaces/movie';
import { Result } from '../interfaces/result';

@Injectable({
  providedIn: 'root'
})
export class ThirdPartyApiService {

  constructor(private client:HttpClient) { }

  SearchThirdParty(searchTerm:string) : Observable<Result[]>{
    let movieList = this.client.get<Result[]>(environment.apiUrl + "Movies/SearchThirdParty?searchTerm="+searchTerm);

    return movieList;
  }
}
