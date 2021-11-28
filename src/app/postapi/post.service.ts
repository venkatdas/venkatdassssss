import { PostModel } from './post.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PostService {
  private readonly apiURL: string =
    'https://jsonplaceholder.typicode.com/posts';
  constructor(private httpClient: HttpClient) {}
  apidata() {
    return this.httpClient.get<PostModel[]>(this.apiURL);
  }
}
