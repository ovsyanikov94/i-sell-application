import { Injectable } from '@angular/core';

import { ApiRoutes } from '../../models/ApiRoutes';

import {ServerResponse} from "../../models/server/ServerResponse";

import {HttpClient, HttpParams, HttpRequest} from "@angular/common/http";

import {Comment} from '../../models/comment/Comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(

    private http: HttpClient

  ) { }

  getLotComments( offset: number, limit: number ): Promise<ServerResponse>{

    const httpParams: HttpParams = new HttpParams()
      .set('limit' , limit.toString())
      .set('offset' , offset.toString());

    return this.http.get(
      `${ApiRoutes.SERVER_URL}${ApiRoutes.GET_COMMENTS}`,
      {
        params: httpParams
      }
    ).toPromise() as Promise<ServerResponse>;

  }//getLotComments

  addComment( comment: Comment ): Promise<ServerResponse>{

    const formData = new FormData();

    formData.append('commentText' , comment.commentText) ;
    formData.append('commentStatus' , comment.commentStatus) ;
    formData.append('commentType' , comment.commentType) ;
    formData.append('commentSendDate' , comment.commentSendDate) ;
    formData.append('userSender' , comment.userSender) ;
    formData.append('receiver' , comment.userReceiver) ;

    return this.http.post(
      `${ApiRoutes.SERVER_URL}${ApiRoutes.ADD_COMMENT}`,
      formData
    ).toPromise() as Promise<ServerResponse>;

  }//getLot

}
