import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  providers: [PostsService]
})
export class PostListComponent implements OnInit {

  posts: Post[];

  constructor( private postsService: PostsService ) { }

  getThumbnail(id : number, index: number){
    this.postsService
        .getPostThumbnail(id)
        .subscribe(res => {
          this.posts[index]['postThumbnail'] = res;
            console.log(this.posts);
        });
  }

  getPosts(){
    this.postsService
      .getPosts()
      .subscribe(res => {
        this.posts = res;
        this.posts.forEach((el, index) => {
            if(el['featured_media']){
              this.getThumbnail(el['featured_media'], index);
            }
          }
        );
      });
  }

  ngOnInit() {
    this.getPosts();
  }
}
