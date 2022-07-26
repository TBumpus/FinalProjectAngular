import { Component, OnInit } from '@angular/core';
import { User } from '@auth0/auth0-angular';
import { LocalAPIService } from 'src/app/services/local-api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private service:LocalAPIService) { }

  userName: User | undefined;

  userExists:boolean | undefined;

  ngOnInit(): void {
  }

  CheckForUserName(){
    this.service.CheckForUserName().subscribe((data:User) => this.userName = data);
  }

}
