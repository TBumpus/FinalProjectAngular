import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { LocalAPIService } from 'src/app/services/local-api.service';

@Component({
  selector: 'app-user-movie-list',
  templateUrl: './user-movie-list.component.html',
  styleUrls: ['./user-movie-list.component.css']
})
export class UserMovieListComponent implements OnInit {

  constructor(private service:LocalAPIService) { }

  userMovieList: Movie[] = [];


  ngOnInit(): void {
    this.GetAllMoviesFromUserList();
  }

  GetAllMoviesFromUserList(){
    this.service.GetAllMoviesFromUserList().subscribe((data:Movie[]) => this.userMovieList = data);
  }
}
