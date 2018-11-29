import { Injectable } from '@angular/core';

import { ApiRoutes } from '../../models/ApiRoutes';

import {ServerResponse} from "../../models/server/ServerResponse";

import {HttpClient, HttpParams, HttpRequest} from "@angular/common/http";

import {Comment} from '../../models/comment/Comment';

import {Constants} from "../../models/Constants";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(

    private http: HttpClient

  ) { }

  getLotComments( id: string, offset: number, limit: number ): Promise<ServerResponse>{

    const httpParams: HttpParams = new HttpParams()
      .set('id', id)
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

    const commentData = new FormData();
    commentData.append('commentText' , comment.commentText);
    commentData.append('commentStatus' , comment.commentStatus.toString()) ;
    commentData.append('commentType' , comment.commentType.toString()) ;
    commentData.append('commentSendDate' , comment.commentSendDate) ;
    commentData.append('userSender' , comment.userSender) ;

    if (+comment.commentType === Constants.COMMENT_TYPE_LOT){
      commentData.append('lot' , comment.lot) ;
    }//if

    else if (+comment.commentType === Constants.COMMENT_TYPE_PERSONAL){
      commentData.append('userReceiver' , comment.userReceiver) ;
    }//if

    return this.http.post(
      `${ApiRoutes.SERVER_URL}${ApiRoutes.COMMENT_ADD_NEW}`
      , commentData
    ).toPromise() as Promise<ServerResponse>;

  }//addComment

}
