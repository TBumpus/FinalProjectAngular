import { Component, Input, OnInit } from '@angular/core';
import { MovieAPI } from 'src/app/interfaces/movie-api';
import { Result } from 'src/app/interfaces/result';
import { ThirdPartyApiService } from 'src/app/services/third-party-api.service';

@Component({
  selector: 'app-search-movie-result',
  templateUrl: './search-movie-result.component.html',
  styleUrls: ['./search-movie-result.component.css']
})
export class SearchMovieResultComponent implements OnInit {


  constructor(private service:ThirdPartyApiService) { }

  movieAPI:MovieAPI | undefined;

  ngOnInit(): void {
  }

}
