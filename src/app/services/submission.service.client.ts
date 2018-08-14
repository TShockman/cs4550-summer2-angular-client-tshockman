import {Injectable} from '@angular/core';
import {parseResponse, QUIZ_API_URL} from './api-constants';

@Injectable()
export class SubmissionServiceClient {

  getSubmission(qid, sid) {
    return fetch(`${QUIZ_API_URL}/${qid}/submission/${sid}`)
      .then(parseResponse);
  }

  submit(qid, submission) {
    return fetch(`${QUIZ_API_URL}/${qid}/submission`, {
      method: 'post',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(submission)
    })
      .then(parseResponse);
  }

  getSubmissionsForQuiz(qid) {
    return fetch(`${QUIZ_API_URL}/${qid}/submission`)
      .then(parseResponse);
  }

}
