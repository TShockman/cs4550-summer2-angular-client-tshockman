import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/course.service.client';
import {SectionServiceClient} from '../services/section.service.client';
import {Course, Section} from '../app.types';
import {Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  courses: Course[] = [];
  selectedCourse: Course = <Course>{};
  sections: Section[] = [];
  selectedSection: Section = <Section>{};
  newSectionTitle: String = '';
  newMaxEnrollment: String = '';

  constructor(
    private courseServiceClient: CourseServiceClient,
    private sectionServiceClient: SectionServiceClient,
    private router: Router,
    private userServiceClient: UserServiceClient) { }

  ngOnInit() {
    this.userServiceClient.getProfile()
      .then(user => {
        if (!user) {
          this.router.navigate(['login']);
        }
        if (user.role !== 'ADMIN') {
          this.router.navigate(['profile']);
        }
      });
    this.courseServiceClient.getAllCourses()
      .then(courses => {
        this.courses = courses;
      });
  }

  selectCourse(course) {
    this.selectedCourse = course;
    this.sectionServiceClient.getSectionsForCourseId(course.id)
      .then(sections => {
        this.sections = sections;
      });
  }

  selectSection(section) {
    this.selectedSection = section;
  }

  addSection() {
    if (!this.newSectionTitle) {
      return alert('Please enter title for new section');
    }
    if (!this.newMaxEnrollment) {
      return alert('Please enter enrollment cap for new section');
    }

    const newSection = {
      title: this.newSectionTitle,
      maxEnrollment: this.newMaxEnrollment,
      freeSeats: this.newMaxEnrollment,
      courseId: this.selectedCourse.id
    };

    this.sectionServiceClient.createSectionForCourseId(this.selectedCourse.id, newSection)
      .then(() => {
        this.newSectionTitle = '';
        this.newMaxEnrollment = '';
        return this.sectionServiceClient.getSectionsForCourseId(this.selectedCourse.id);
      })
      .then(sections => {
        this.sections = sections;
      });
  }

  deleteSection() {
    this.sectionServiceClient.deleteSection(this.selectedSection._id)
      .then(() => {
        this.selectedSection = <Section>{};
        return this.sectionServiceClient.getSectionsForCourseId(this.selectedCourse.id);
      })
      .then(sections => {
        this.sections = sections;
      });
  }

  updateSection() {
    this.sectionServiceClient.updateSection(this.selectedSection)
      .then(section => {
        this.selectedSection = section;
        return this.sectionServiceClient.getSectionsForCourseId(this.selectedCourse.id);
      })
      .then(sections => {
        this.sections = sections;
      });
  }


}
