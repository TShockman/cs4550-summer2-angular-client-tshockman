import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/course.service.client';
import {SectionServiceClient} from '../services/section.service.client';
import {Course, Section} from '../app.types';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  courses: Array<Course> = [];
  selectedCourse: Course = null;
  sections: Array<Section> = [];
  selectedSection: Section = null;
  newSectionTitle: String = '';
  newMaxEnrollment: String = '';

  constructor(private courseServiceClient: CourseServiceClient, private sectionServiceClient: SectionServiceClient) { }

  ngOnInit() {
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
        this.selectedSection = null;
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
