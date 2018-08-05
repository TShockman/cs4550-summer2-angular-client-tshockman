import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';
import {User} from '../app.types';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: User = <User>{};

  constructor(private router: Router, private userServiceClient: UserServiceClient) { }

  ngOnInit() {
    this.userServiceClient.getProfile()
      .then(user => {
        if (!user) {
          return this.router.navigate(['login']);
        }
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
