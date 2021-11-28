import { PostComponent } from './postapi/post/post.component';
import { UserComponent } from './user.component';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { YearDayComponent } from './year-day/day.component';
import { DayService } from './year-day/day.service';
import { AccountComponent } from './account/account.component';
import { PipeComponent } from './Pipes/pipe.component';
import { BindingComponent } from './binding/binding.component';
import { LettersPipe } from './letters.pipe';
import { EmployeeComponent } from './employee/employee.component';
import { DirlistDirective } from './dirlist.directive';
import { ContactComponent } from './contact/contact.component';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './postapi/post.service';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { ChildParentComponent } from './child-parent/child-parent.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
// import { ContactComponent } from 'src/TemplateDriven/contact.component';

let routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'home',
    component: HomeComponent,
  },

  {
    path: 'account',
    component: AccountComponent,
  },
  {
    path: 'binding',
    component: BindingComponent,
  },
  {
    path: 'employee/:id',
    component: EmployeeDetailComponent,
  },
  {
    path: 'employee',
    component: EmployeeComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'yearday',
    component: YearDayComponent,
  },
  {
    path: 'post',
    component: PostComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    YearDayComponent,
    AccountComponent,
    PipeComponent,
    BindingComponent,
    LettersPipe,
    EmployeeComponent,
    DirlistDirective,
    ContactComponent,
    UserComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    SignupComponent,
    PostComponent,
    ChildComponent,
    ParentComponent,
    ChildParentComponent,
    EmployeeDetailComponent,
    // ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [DayService, PostService],
  bootstrap: [AppComponent],
})
export class AppModule {}
