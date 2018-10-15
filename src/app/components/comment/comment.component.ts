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

  constructor() {

    this.textColor = 'red';

  }

  ngOnInit() {
  }

}
