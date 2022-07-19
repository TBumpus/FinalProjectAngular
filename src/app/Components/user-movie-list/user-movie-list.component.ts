import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { MovieCategory } from 'src/app/interfaces/moviecategory';
import { LocalAPIService } from 'src/app/services/local-api.service';

@Component({
  selector: 'app-user-movie-list',
  templateUrl: './user-movie-list.component.html',
  styleUrls: ['./user-movie-list.component.css']
})
export class UserMovieListComponent implements OnInit {

  constructor(private service:LocalAPIService) { }

  userMovieList: Movie[] = [];

  movie: Movie | undefined; 
  
  category = MovieCategory;

  ngOnInit(): void {
    this.GetAllMoviesFromUserList();
  }

  GetAllMoviesFromUserList(){
    this.service.GetAllMoviesFromUserList().subscribe((data:Movie[]) => this.userMovieList = data);
  }


  UpdateCategory(id: number, category: MovieCategory){
    this.service.UpdateCategory(id, category).subscribe((data:Movie) => this.movie = data);
  }

  DeleteMovieFromUserList(id:number){
    this.service.DeleteMovieFromUserList(id).subscribe((data:Movie) => this.movie = data);
    location.reload();

  }




}