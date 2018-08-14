import {Injectable} from '@angular/core';
import {parseResponse, QUIZ_API_URL} from './api-constants';

@Injectable()
export class QuizServiceClient {

  getAllQuizzes() {
    return fetch(QUIZ_API_URL)
      .then(parseResponse);
  }

  getQuiz(qid) {
    return fetch(`${QUIZ_API_URL}/${qid}`).then(parseResponse);
  }
}
