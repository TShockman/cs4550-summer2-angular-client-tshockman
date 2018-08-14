import { Component, OnInit } from '@angular/core';
import {Submission} from '../app.types';
import {SubmissionServiceClient} from '../services/submission.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-quiz-answers',
  templateUrl: './quiz-answers.component.html',
  styleUrls: ['./quiz-answers.component.css']
})
export class QuizAnswersComponent implements OnInit {

  submission: Submission = null;
  gradedAnswers: any[] = [];
  earnedPoints = 0;
  totalPoints = 0;

  constructor(private submissionServiceClient: SubmissionServiceClient,
              private activatedRoute: ActivatedRoute) { }

  fetchData = () => {
    this.submission = null;
    this.gradedAnswers = [];
    this.earnedPoints = 0;
    this.totalPoints = 0;
    const qid = this.activatedRoute.snapshot.params['qid'];
    const sid = this.activatedRoute.snapshot.params['sid'];
    this.submissionServiceClient.getSubmission(qid, sid)
      .then(submission => {
        this.gradedAnswers = submission.answers.slice();
        for (const gradedAnswer of this.gradedAnswers) {
          this.totalPoints += gradedAnswer.question.points;
          switch (gradedAnswer.question.questionType) {
            case 'TRUE_FALSE':
              if (gradedAnswer.tfAnswer === gradedAnswer.question.isTrue) {
                gradedAnswer.correct = true;
                this.earnedPoints += gradedAnswer.question.points;
              }
              break;
            case 'CHOICE':
              const correctChoice = gradedAnswer.question.choices.find(choice => choice.correct).text;
              gradedAnswer.correctChoice = correctChoice;
              if (correctChoice === gradedAnswer.mcAnswer) {
                gradedAnswer.correct = true;
                this.earnedPoints += gradedAnswer.question.points;
              }
              break;
            case 'FILL_BLANKS':
              let allTrue = true;
              for (let i = 0; i < gradedAnswer.question.blanks.length; i++) {
                console.log(gradedAnswer.question.blanks[i], '===', gradedAnswer.fitbAnswers[i])
                allTrue = allTrue && gradedAnswer.question.blanks[i].toUpperCase() === gradedAnswer.fitbAnswers[i].toUpperCase();
              }
              if (allTrue) {
                gradedAnswer.correct = true;
                this.earnedPoints += gradedAnswer.question.points;
              }
              break;
            case 'ESSAY':
              if (gradedAnswer.essayAnswer.length > 50) {
                gradedAnswer.correct = true;
                this.earnedPoints += gradedAnswer.question.points;
              }
              break;
          }
        }
        this.submission = submission;
      });
  }

  ngOnInit() {
    this.fetchData();
  }

}
