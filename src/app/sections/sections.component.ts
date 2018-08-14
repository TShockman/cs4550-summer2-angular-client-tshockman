import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SectionServiceClient} from '../services/section.service.client';
import {Section, User} from '../app.types';
import {UserServiceClient} from '../services/user.service.client';
import {EnrollmentServiceClient} from '../services/enrollment.service.client';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {
  sections: Section[] = null;
  currentUser: User = null;
  courseId: Number = null;

  constructor(private sectionServiceClient: SectionServiceClient,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private userServiceClient: UserServiceClient,
              private enrollmentServiceClient: EnrollmentServiceClient) { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData = () => {
    this.courseId = this.activatedRoute.snapshot.params['cid'];
    this.sectionServiceClient.getSectionsForCourseId(this.courseId)
      .then(sections => {
        console.log(JSON.stringify(sections, null, 2));
        this.sections = sections;
      });
    this.userServiceClient.getProfile()
      .then(user => {
        console.log(JSON.stringify(user, null, 2));
        this.currentUser = user;
      });
  }

  enroll(section) {
    this.enrollmentServiceClient.enroll(this.currentUser, section)
      .then(this.fetchData);
  }

  unenroll(section) {
    this.enrollmentServiceClient.unenroll(this.currentUser, section)
      .then(this.fetchData);
  }

  isEnrolled(section) {
    return this.currentUser.sections.filter(s => s._id === section._id).length;
  }
}
