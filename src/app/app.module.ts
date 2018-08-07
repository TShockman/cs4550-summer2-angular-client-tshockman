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
    SectionsComponent
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
    EnrollmentServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
