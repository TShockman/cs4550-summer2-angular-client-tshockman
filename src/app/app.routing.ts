import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import {RegisterComponent} from './register/register.component';
import {AdminComponent} from './admin/admin.component';
import {HomepageComponent} from './homepage/homepage.component';
import {CourseComponent} from './course/course.component';
import {SectionsComponent} from './sections/sections.component';

const appRoutes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'course/:cid', component: CourseComponent},
  {path: 'course/:cid/sections', component: SectionsComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
