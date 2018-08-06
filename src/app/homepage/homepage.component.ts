import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/course.service.client';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';
import {Course, User} from '../app.types';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  currentUser: User = null;
  courses: Array<Course> = [];

  constructor(private courseServiceClient: CourseServiceClient, private userServiceClient: UserServiceClient, private router: Router) { }

  ngOnInit() {
    this.userServiceClient.getProfile()
      .then(user => {
        if (user) {
          this.currentUser = user;
        }
      });
    this.courseServiceClient.getAllCourses()
      .then(courses => {
        this.courses = courses;
      });
  }

}
