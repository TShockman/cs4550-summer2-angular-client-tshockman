import {Injectable} from '@angular/core';
import {STUDENT_API_URL} from './api-constants';

@Injectable()
export class EnrollmentServiceClient {
  enroll(student, section) {
    return fetch(`${STUDENT_API_URL}/${student._id}/section/${section._id}`,{
      method: 'POST',
      credentials: 'include'
    })
      .then(response => response.ok);
  }

  unenroll(student, section) {
    return fetch(`${STUDENT_API_URL}/${student._id}/section/${section._id}`,{
      method: 'DELETE',
      credentials: 'include'
    })
      .then(response => response.ok);
  }

  getSectionsForStudent(student) {
    return fetch(`${STUDENT_API_URL}/${student._id}/section`,{
      method: 'GET',
      credentials: 'include'
    })
      .then(response => response.json());
  }
}
