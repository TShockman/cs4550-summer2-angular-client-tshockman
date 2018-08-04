import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';

interface User {
  username: String;
  password: String;
  firstName: String;
  lastName: String;
  role: String;
  phone: String;
  email: String;
  address: String;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: User;

  constructor(private router: Router, private userServiceClient: UserServiceClient) { }

  ngOnInit() {
    this.userServiceClient.getProfile()
      .then(user => {
        this.currentUser = user;
      });
  }

  deleteUser() {
    this.userServiceClient.deleteUser()
      .then(() => {
        this.currentUser = undefined;
        this.router.navigate(['']);
      });
  }

  logout() {
    this.userServiceClient.logout()
      .then(() => {
        this.currentUser = undefined;
        this.router.navigate(['']);
      });
  }

  updateProfile() {
    this.userServiceClient.updateProfile(this.currentUser)
      .then(newUser => {
        this.currentUser = newUser;
        alert('User information updated');
      });
  }

}
