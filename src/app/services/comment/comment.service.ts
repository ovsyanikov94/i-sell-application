import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comment } from '../../models/comment/Comment';
import {ServerResponse} from '../../models/server/ServerResponse';
import {ApiRoutes} from '../../models/ApiRoutes';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(
    private http: HttpClient
  ) { }

  addComment( comment: Comment ): Promise<ServerResponse>{

    const commentData = new FormData();
    commentData.append('commentText' , comment.commentText);
    //...

    return this.http.post(
      `${ApiRoutes.SERVER_URL}${ApiRoutes.COMMENT_ADD_NEW}`
      , commentData
    ).toPromise() as Promise<ServerResponse>;

  }

}
