import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username: String;
  password: String;
  passwordConfirm: String;
  firstName: String;
  lastName: String;
  role: String = 'STUDENT';

  constructor(private router: Router, private userServiceClient: UserServiceClient) { }

  ngOnInit() {
    this.userServiceClient.getProfile()
      .then(user => {
        if (user) {
          this.router.navigate(['profile']);
        }
      });
  }

  register() {
    if (!this.username) {
      alert('Please enter a username');
      return;
    }

    if (!this.password) {
      alert('Please enter a password');
      return;
    }

    if (this.password !== this.passwordConfirm) {
      alert('Please make sure passwords match');
      return;
    }

    const user = {
      username: this.username,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName,
      role: this.role
    };
    this.userServiceClient.register(user)
      .then(u => {
        if (u) {
          this.router.navigate(['profile']);
        } else {
          return alert('Registration failed');
        }
      });
  }

}
