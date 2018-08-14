import { Component, OnInit } from '@angular/core';
import {Submission} from '../app.types';
import {ActivatedRoute} from '@angular/router';
import {SubmissionServiceClient} from '../services/submission.service.client';

@Component({
  selector: 'app-quiz-submissions',
  templateUrl: './quiz-submissions.component.html',
  styleUrls: ['./quiz-submissions.component.css']
})
export class QuizSubmissionsComponent implements OnInit {

  submissions: Submission[] = null;

  constructor(private activatedRoute: ActivatedRoute,
              private submissionServiceClient: SubmissionServiceClient) { }

  fetchData = () => {
    const qid = this.activatedRoute.snapshot.params['qid'];
    this.submissionServiceClient.getSubmissionsForQuiz(qid)
      .then(submissions => {
        this.submissions = submissions;
      });
  }

  ngOnInit() {
    this.fetchData();
  }

}
