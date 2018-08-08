import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CourseServiceClient} from '../services/course.service.client';
import {Course, Lesson, Module, Section, User, Widget} from '../app.types';
import {UserServiceClient} from '../services/user.service.client';
import {SectionServiceClient} from '../services/section.service.client';
import {ModuleServiceClient} from '../services/module.service.client';
import {LessonServiceClient} from '../services/lesson.service.client';
import {WidgetServiceClient} from '../services/widget.service.client';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  course: Course = <Course>{};
  currentUser: User = null;
  sections: Array<Section> = [];
  modules: Array<Module> = [];
  selectedModuleId: String = null;
  lessons: Array<Lesson> = [];
  selectedLessonId: String = null;
  widgets: Array<Widget> = [];

  constructor(private courseServiceClient: CourseServiceClient,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private userServiceClient: UserServiceClient,
              private sectionServiceClient: SectionServiceClient,
              private moduleServiceClient: ModuleServiceClient,
              private lessonServiceClient: LessonServiceClient,
              private widgetServiceClient: WidgetServiceClient) { }

  fetchData = () => {
    this.selectedModuleId = null;
    this.selectedLessonId = null;
    const cid = this.activatedRoute.snapshot.params['cid'];
    this.courseServiceClient.getCourse(cid)
      .then(course => {
        console.log(JSON.stringify(course, null, 2));
        this.course = course;
      });
    this.sectionServiceClient.getSectionsForCourseId(cid)
      .then(sections => {
        this.sections = sections;
      });
    this.moduleServiceClient.getModulesForCourse(cid)
      .then(modules => {
        this.modules = modules;
        if (modules.length) {
          this.selectModule(modules[0].id);
        }
      });
    this.userServiceClient.getProfile()
      .then(user => {
        this.currentUser = user;
      });
  }

  ngOnInit() {
    this.fetchData();
  }

  selectModule = mid => {
    this.selectedModuleId = mid;
    this.selectedLessonId = null;
    this.lessonServiceClient.getLessonsForModule(this.course.id || this.activatedRoute.snapshot.params['cid'], mid)
      .then(lessons => {
        this.lessons = lessons;
        if (lessons.length) {
          this.selectLesson(lessons[0].id);
        }
      });
  }

  selectLesson = lid => {

    this.selectedLessonId = lid;
    this.widgetServiceClient.getWidgetsForLesson(lid)
      .then(widgets => {
        this.widgets = widgets;
      });
  }

}
