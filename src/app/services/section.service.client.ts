import {Injectable} from '@angular/core';
import {COURSE_SECTION_API_URL, parseResponse, SECTION_API_URL} from './api-constants';

@Injectable()
export class SectionServiceClient {
  getSectionsForCourseId(courseId) {
    return fetch(`${COURSE_SECTION_API_URL}/${courseId}/section`, {
      method: 'get',
      credentials: 'include'
    }).then(parseResponse);
  }

  createSectionForCourseId(courseId, section) {
    return fetch(`${COURSE_SECTION_API_URL}/${courseId}/section`, {
      method: 'post',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(section)
    }).then(parseResponse);
  }

  deleteSection(sectionId) {
    return fetch(`${SECTION_API_URL}/${sectionId}`, {
      method: 'delete',
      credentials: 'include'
    });
  }

  updateSection(section) {
    return fetch(`${SECTION_API_URL}/${section._id}`, {
      method: 'put',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(section)
    }).then(parseResponse);
  }
}
