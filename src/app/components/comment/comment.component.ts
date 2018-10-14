import { Component, OnInit , Input } from '@angular/core';

import { Comment } from '../../models/comment/Comment';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input('userComment') comment: Comment;

  public textColor: string;

  public lenght: number;
  public Less: boolean;
  public More: boolean;
  constructor() {

    this.textColor = 'red';
    this.lenght = 100;

    this.Less = false;
    this.More = true;
  }

  ShowMassage(){
    this.lenght = this.comment.commentText.length;
    this.More = !this.More;
    this.Less = !this.Less;
  }

  DellMassage(){
    this.lenght = 100;
    this.Less = !this.Less;
    this.More = !this.More;
  }

  ngOnInit() {


  }

}
