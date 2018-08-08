import {Injectable} from '@angular/core';
import {COURSE_API_URL, parseResponse} from './api-constants';

@Injectable()
export class ModuleServiceClient {

  getModulesForCourse(cid) {
    return fetch(`${COURSE_API_URL}/${cid}/module`)
      .then(parseResponse);
  }
}
