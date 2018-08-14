import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/course.service.client';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';
import {Course, User} from '../app.types';
import {EnrollmentServiceClient} from '../services/enrollment.service.client';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  currentUser: User = null;
  courses: Course[] = [];

  constructor(private courseServiceClient: CourseServiceClient,
              private userServiceClient: UserServiceClient,
              private enrollmentServiceClient: EnrollmentServiceClient) { }

  fetchData = () => {
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

  ngOnInit() {
    this.fetchData();
  }

  unenroll(section) {
    this.enrollmentServiceClient.unenroll(this.currentUser, section)
      .then(this.fetchData);
  }

}
