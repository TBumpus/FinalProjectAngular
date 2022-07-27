import { Component, OnInit } from '@angular/core';
import { AuthService, User } from '@auth0/auth0-angular';
import { LocalAPIService } from 'src/app/services/local-api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private service:LocalAPIService, public auth: AuthService) { }

  userName: User | undefined;

  userExists:boolean = false;

  ngOnInit(): void {
    //this.CheckForUserName();
    this.userExists=true;
  }

  CheckForUserName(){
    this.service.CheckForUserName().subscribe((data:boolean) => this.userExists = data);
  }

}
