import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';
import {User} from '../app.types';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;

  constructor(private router: Router, private userServiceClient: UserServiceClient) { }

  ngOnInit() {
    this.userServiceClient.getProfile()
      .then(user => {
        if (user) {
          this.router.navigate(['profile']);
        }
      });
  }

  login() {
    const user = {
      username: this.username,
      password: this.password
    };
    this.userServiceClient.login(user)
      .then(u => this.router.navigate(['profile']));  }
}
