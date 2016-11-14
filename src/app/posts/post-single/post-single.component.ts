import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostsService } from '../posts.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-post-single',
  templateUrl: './post-single.component.html',
  styleUrls: ['./post-single.component.css'],
  providers: [PostsService]
})
export class PostSingleComponent implements OnInit {

  post: Post;

  constructor( private postsService: PostsService, private route: ActivatedRoute ) { }

  getPost(slug, type){
    this.postsService
      .getPost(slug, type)
      .subscribe(res => {
        this.post = res[0];
      });
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
       let slug = params['slug'];
       let type = params['type'];

        switch (type) {
          case 'page':
            this.getPost(slug,'pages');
            break;
          case 'post':
            this.getPost(slug,'posts');
            break;
        }
    });

  }

}
