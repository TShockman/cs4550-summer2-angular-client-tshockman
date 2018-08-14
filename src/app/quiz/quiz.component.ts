import { Component, OnInit } from '@angular/core';
import {Answer, Quiz, User} from '../app.types';
import {UserServiceClient} from '../services/user.service.client';
import {QuizServiceClient} from '../services/quiz.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SubmissionServiceClient} from '../services/submission.service.client';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  currentUser: User = null;
  quiz: Quiz = null;
  answers: Object = {};

  constructor(private userServiceClient: UserServiceClient,
              private quizServiceClient: QuizServiceClient,
              private activatedRoute: ActivatedRoute,
              private submissionServiceClient: SubmissionServiceClient,
              private router: Router) { }

  fetchData = () => {
    this.answers = {};
    const qid = this.activatedRoute.snapshot.params['qid'];
    this.userServiceClient.getProfile()
      .then(user => this.currentUser = user);
    this.quizServiceClient.getQuiz(qid)
      .then(quiz => {
        this.quiz = quiz;
        for (const question of this.quiz.questions) {
          this.answers[question._id] = {
            question: question._id,
            tfAnswer: null,
            mcAnswer: null,
            essayAnswer: '',
            fitbAnswers: new Array(question.blanks ? question.blanks.length : 0).fill('')};
        }
      });
  }

  ngOnInit() {
    this.fetchData();
  }

  submit() {
    if (!this.currentUser) {
      return alert('You must be logged in to submit a quiz!');
    }
    for (const question of this.quiz.questions) {
      const thisAnswer = this.answers[question._id];
      switch (question.questionType) {
        case 'ESSAY':
          if (!thisAnswer.essayAnswer) {
            return alert('Please enter an answer for question: ' + question.title);
          }
          break;
        case 'TRUE_FALSE':
          if (thisAnswer.tfAnswer === null) {
            return alert('Please select a value for question: ' + question.title);
          }
          break;
        case 'CHOICE':
          if (thisAnswer.mcAnswer === null) {
            return alert('Please select a value for question: ' + question.title);
          }
          break;
        case 'FILL_BLANKS':
          if (!thisAnswer.fitbAnswers.reduce((acc, curr) => acc && curr)) {
            return alert('Please fill in all values for question: ' + question.title);
          }
      }
    }
    this.submissionServiceClient.submit(this.quiz._id, {answers: this.quiz.questions.map(q => this.answers[q._id])})
      .then(submission => {
        this.router.navigate([`/quiz/${this.quiz._id}/submission/${submission._id}`]);
      });
  }

}
