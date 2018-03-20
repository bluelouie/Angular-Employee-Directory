import { Http } from '@angular/http';
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
    http.get('https://randomuser.me/api/?nat=us&results=42')
    .subscribe(response => {
      const results = response.json();
      this.users = results.results;
    });
 }

  ngOnInit() {
  }

}
