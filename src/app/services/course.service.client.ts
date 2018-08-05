import {Injectable} from '@angular/core';
import {COURSE_API_URL} from './api-constants';

@Injectable()
export class CourseServiceClient {
  getAllCourses() {
    return fetch(COURSE_API_URL)
      .then(response => response.json());
  }
}
