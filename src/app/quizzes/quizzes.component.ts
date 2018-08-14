import { Component, OnInit } from '@angular/core';
import {Quiz} from '../app.types';
import {QuizServiceClient} from '../services/quiz.service.client';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {

  quizzes: Quiz[] = [];

  constructor(private quizServiceClient: QuizServiceClient) { }

  fetchData = () => {
    this.quizServiceClient.getAllQuizzes()
      .then(quizzes => {
        if (quizzes) {
          this.quizzes = quizzes;
        }
      });
  }

  ngOnInit() {
    this.fetchData();
  }

}
