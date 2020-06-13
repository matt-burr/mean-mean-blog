import { Component, OnInit } from '@angular/core';
import { Post, postData } from '../../types/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts: Array<Post> = null;
  constructor() {
    this.setPosts();
  }

  ngOnInit(): void {}

  setPosts(): void {
    this.posts = postData;
  }
}
