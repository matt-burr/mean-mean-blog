import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Post, postData } from '../../types/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  postId = null;
  post: Post;

  constructor(activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      this.postId = params.id;
    });
  }

  ngOnInit(): void {}

  getPost(): Post {
    return this.postId !== null
      ? postData.find((post) => post.id === this.postId)
      : null;
  }
}
