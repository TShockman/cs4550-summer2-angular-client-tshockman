import {Injectable} from '@angular/core';
import {COURSE_API_URL} from './api-constants';

@Injectable()
export class LessonServiceClient {

  getLessonsForModule(cid, mid) {
    return fetch(`${COURSE_API_URL}/${cid}/module/${mid}/lesson`)
      .then(response => response.json());
  }
}
