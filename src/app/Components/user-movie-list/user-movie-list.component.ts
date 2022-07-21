import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
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

  role = MovieCategory;

  keys() : Array<string>{
    var keys = Object.keys(this.role);
    return keys.slice(keys.length / 2);
  }

  ngOnInit(): void {
    this.GetAllMoviesFromUserList();
  }

  GetAllMoviesFromUserList(){
    this.service.GetAllMoviesFromUserList().subscribe((data:Movie[]) => this.userMovieList = data);
  }



  UpdateCategory(id: number, category: string){

    var test:MovieCategory = category as unknown as MovieCategory;
    this.service.UpdateCategory(id, test).subscribe((data:Movie) => this.movie = data);
    location.reload();
  }

  DeleteMovieFromUserList(id:number){
    this.service.DeleteMovieFromUserList(id).subscribe((data:Movie) => this.movie = data);
    location.reload();

  }




}