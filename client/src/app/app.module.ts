import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { AdminComponent } from './admin/admin.component';

const router: Routes = [
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
];

@NgModule({
  declarations: [AppComponent, PostsComponent, PostComponent, AdminComponent],
  imports: [BrowserModule, RouterModule.forRoot(router)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
