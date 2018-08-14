import {Injectable} from '@angular/core';
import {COURSE_API_URL, parseResponse} from './api-constants';
import {Course} from '../app.types';

@Injectable()
export class CourseServiceClient {
  getAllCourses() {
    return fetch(COURSE_API_URL)
      .then(parseResponse);
  }

  getCourse(cid) {
    return fetch(`${COURSE_API_URL}/${cid}`)
      .then(parseResponse);
  }
}
