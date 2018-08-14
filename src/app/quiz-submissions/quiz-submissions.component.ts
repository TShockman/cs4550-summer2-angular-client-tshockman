import { Component, OnInit } from '@angular/core';
import {Submission, User} from '../app.types';
import {ActivatedRoute} from '@angular/router';
import {SubmissionServiceClient} from '../services/submission.service.client';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-quiz-submissions',
  templateUrl: './quiz-submissions.component.html',
  styleUrls: ['./quiz-submissions.component.css']
})
export class QuizSubmissionsComponent implements OnInit {

  user: User = null;
  submissions: Submission[] = null;
  filter: String = '';

  constructor(private activatedRoute: ActivatedRoute,
              private submissionServiceClient: SubmissionServiceClient,
              private userServiceClient: UserServiceClient) { }

  fetchData = () => {
    const qid = this.activatedRoute.snapshot.params['qid'];
    this.submissionServiceClient.getSubmissionsForQuiz(qid)
      .then(submissions => {
        this.submissions = submissions;
      });
    this.userServiceClient.getProfile()
      .then(user => {
        if (user) {
          if (user.role === 'STUDENT') {
            this.filter = user.username;
          }
          this.user = user;
        } else {
          return alert('Please login.')
        }
      });
  }

  ngOnInit() {
    this.fetchData();
  }

  studentFilter = s => s.student.username.includes(this.filter);

}
