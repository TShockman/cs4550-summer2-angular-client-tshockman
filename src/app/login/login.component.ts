import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';
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
  }

  login() {
    const user = {
      username: this.username,
      password: this.password
    };
    this.userServiceClient.login(user)
      .then(u => this.router.navigate(['profile']));  }
}
