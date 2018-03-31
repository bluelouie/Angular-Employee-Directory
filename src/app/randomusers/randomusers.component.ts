import { Http, Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-randomusers',
  templateUrl: './randomusers.component.html',
  styleUrls: ['./randomusers.component.css']
})
export class RandomusersComponent implements OnInit {
  users: any[];

  user: object;
  
  modalToggle = false;

  userClicked(user: object) {
    this.user = user;
  }

  toggleModal(user?: object) {
    this.userClicked(user);
    this.modalToggle = !this.modalToggle;
  }

  constructor(http: Http) {
    http.get('https://hidden-temple-25209.herokuapp.com/users').forEach( (response: Response) => {
      const users = response.json().obj;
      const usersJSON = JSON.parse(users);
      this.users = usersJSON.results;
    });
 }

  ngOnInit() {
  }

}
