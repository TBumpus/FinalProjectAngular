import { Component, OnInit } from '@angular/core';
import { MovieAPI } from 'src/app/interfaces/movie-api';
import { ThirdPartyApiService } from 'src/app/services/third-party-api.service';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {

  constructor(private service:ThirdPartyApiService) { }


  ngOnInit(): void {
  }

  movieAPI:MovieAPI | undefined;

  submitForm(form:any){
    console.log(form);

    this.service.SearchThirdParty(form.value["movieSearch"]).subscribe((data:MovieAPI) => this.movieAPI = data);
    form.reset();
  }
}
