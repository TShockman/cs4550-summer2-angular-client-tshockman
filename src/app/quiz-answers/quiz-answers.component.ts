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

  constructor(private submissionServiceClient: SubmissionServiceClient,
              private activatedRoute: ActivatedRoute) { }

  fetchData = () => {
    const qid = this.activatedRoute.snapshot.params['qid'];
    const sid = this.activatedRoute.snapshot.params['sid'];
    this.submissionServiceClient.getSubmission(qid, sid)
      .then(submission => this.submission = submission);
  }

  ngOnInit() {
    this.fetchData();
  }

}
