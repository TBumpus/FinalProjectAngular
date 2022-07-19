import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { Result } from 'src/app/interfaces/result';
import { MovieAPI } from 'src/app/interfaces/movie-api';
import { LocalAPIService } from 'src/app/services/local-api.service';
import { ThirdPartyApiService } from 'src/app/services/third-party-api.service';
import { MovieCategory } from 'src/app/interfaces/moviecategory';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {

  constructor(private service:ThirdPartyApiService, private ourService:LocalAPIService, private _router:Router) { }


  ngOnInit(): void {
  }

  movieAPI:MovieAPI | undefined;
  movie:Movie | undefined;

  submitForm(form:any){
    console.log(form);

    this.service.SearchThirdParty(form.value["movieSearch"]).subscribe((data:MovieAPI) => this.movieAPI = data);
    form.reset();
  }

  AddMovieToUserList(result:Result){
    console.log(result);
      // post to list, then redirect
      this.ourService.AddMovieToUserList({imdbId : result.id, title : result.title, auth0Id : "", id : 0, category : MovieCategory.Action})
      .subscribe((data:Movie) => {this.movie = data; this._router.navigate(["/userMovieList"])} );
  }
}
