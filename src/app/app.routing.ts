import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import {RegisterComponent} from './register/register.component';
import {AdminComponent} from './admin/admin.component';
import {HomepageComponent} from './homepage/homepage.component';
import {CourseComponent} from './course/course.component';
import {SectionsComponent} from './sections/sections.component';
import {QuizzesComponent} from './quizzes/quizzes.component';
import {QuizComponent} from './quiz/quiz.component';
import {QuizAnswersComponent} from './quiz-answers/quiz-answers.component';

const appRoutes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'course/:cid', component: CourseComponent},
  {path: 'course/:cid/sections', component: SectionsComponent},
  {path: 'quizzes', component: QuizzesComponent},
  {path: 'quiz/:qid', component: QuizComponent},
  {path: 'quiz/:qid/submission/:sid', component: QuizAnswersComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
