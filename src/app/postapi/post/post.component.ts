import { PostModel } from './../post.model';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  lstPosts: PostModel[];
  constructor(private postservice: PostService) {}

  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    this.postservice.apidata().subscribe((response) => {
      this.lstPosts = response;
    });
  }
}
