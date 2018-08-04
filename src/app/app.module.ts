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

@NgModule({
  declarations: [
    AppComponent,
    CourseManagerComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent
  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule
  ],
  providers: [
    UserServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
