import {Injectable} from '@angular/core';
import {LESSON_API_URL, parseResponse} from './api-constants';

@Injectable()
export class WidgetServiceClient {

  getWidgetsForLesson(lid) {
    return fetch(`${LESSON_API_URL}/${lid}/widget`)
      .then(parseResponse);
  }
}
