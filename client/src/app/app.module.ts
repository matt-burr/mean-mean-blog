import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { AdminComponent } from './admin/admin.component';
import { LoginFormComponent } from './loginForm/loginForm.component';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
  },
  {
    path: 'post/:id',
    component: PostComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'login',
    component: LoginFormComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    AdminComponent,
    LoginFormComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
