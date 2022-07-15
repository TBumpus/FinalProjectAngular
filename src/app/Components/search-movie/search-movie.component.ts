import { Component, OnInit } from '@angular/core';
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

  submitForm(form:any) {
    this.service.SearchThirdParty(form.value["searchTerm"])
  }

}
