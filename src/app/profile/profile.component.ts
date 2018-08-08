import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';
import {User} from '../app.types';
import {EnrollmentServiceClient} from '../services/enrollment.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: User = <User>{};
  newPassword: String = '';
  newPasswordConfirm: String = '';

  constructor(private router: Router,
              private userServiceClient: UserServiceClient,
              private enrollmentServiceClient: EnrollmentServiceClient) { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData = () => {
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
      .then(user => {
        if (user) {
          this.fetchData();
          return alert('User information updated');
        } else {
          return alert('Failed to update user information');
        }
      });
  }

  unenroll(section) {
    this.enrollmentServiceClient.unenroll(this.currentUser, section)
      .then(this.fetchData);
  }

  changePassword() {
    if (this.newPassword.length < 4 || this.newPassword !== this.newPasswordConfirm) {
      return alert('Ensure passwords match');
    }
    this.userServiceClient.updatePassword({_id: this.currentUser._id, password: this.newPassword})
      .then(result => {
        if (result) {
          this.newPassword = '';
          this.newPasswordConfirm = '';
          return alert('Password changed');
        } else {
          return alert('Password failed to change');
        }
      });
  }

}
