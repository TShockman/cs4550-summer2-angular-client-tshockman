import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CourseServiceClient} from '../services/course.service.client';
import {Course} from '../app.types';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  course: Course = <Course>{};
  courseString: String = '';

  constructor(private courseServiceClient: CourseServiceClient, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.courseServiceClient.getCourse(this.activatedRoute.snapshot.params['cid'])
      .then(course => {
        this.course = course;
        this.courseString = JSON.stringify(this.course, null, 2);
      });

  }

}
