import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CourseManagerComponent } from './course-manager/course-manager.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { routing } from './app.routing';
import {UserServiceClient} from './services/user.service.client';
import { AdminComponent } from './admin/admin.component';
import {CourseServiceClient} from './services/course.service.client';
import {SectionServiceClient} from './services/section.service.client';
import { HomepageComponent } from './homepage/homepage.component';
import { CourseComponent } from './course/course.component';
import { SectionsComponent } from './sections/sections.component';
import {EnrollmentServiceClient} from './services/enrollment.service.client';
import {ModuleServiceClient} from './services/module.service.client';
import {LessonServiceClient} from './services/lesson.service.client';
import {WidgetServiceClient} from './services/widget.service.client';
import { WidgetHeadingComponent } from './widget-heading/widget-heading.component';
import { WidgetParagraphComponent } from './widget-paragraph/widget-paragraph.component';
import { WidgetListComponent } from './widget-list/widget-list.component';
import { WidgetLinkComponent } from './widget-link/widget-link.component';
import { WidgetImgComponent } from './widget-img/widget-img.component';
import { QuizzesComponent } from './quizzes/quizzes.component';
import {QuizServiceClient} from './services/quiz.service.client';
import { QuizComponent } from './quiz/quiz.component';
import { QuizAnswersComponent } from './quiz-answers/quiz-answers.component';
import {SubmissionServiceClient} from './services/submission.service.client';

@NgModule({
  declarations: [
    AppComponent,
    CourseManagerComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    AdminComponent,
    HomepageComponent,
    CourseComponent,
    SectionsComponent,
    WidgetHeadingComponent,
    WidgetParagraphComponent,
    WidgetListComponent,
    WidgetLinkComponent,
    WidgetImgComponent,
    QuizzesComponent,
    QuizComponent,
    QuizAnswersComponent
  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule
  ],
  providers: [
    UserServiceClient,
    CourseServiceClient,
    SectionServiceClient,
    EnrollmentServiceClient,
    ModuleServiceClient,
    LessonServiceClient,
    WidgetServiceClient,
    QuizServiceClient,
    SubmissionServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
