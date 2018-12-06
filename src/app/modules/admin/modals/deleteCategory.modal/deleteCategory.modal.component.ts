import {Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { CategoryData } from '../../models/modal.category/category.data';

@Component({
  selector: 'app-del-category-modal',
  templateUrl: './deleteCategory.modal.component.html',
  styleUrls: ['./deleteCategory.modal.component.css']
})
export class DeleteCategoryModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteCategoryModalComponent>,
    @Inject(MAT_DIALOG_DATA) public categoryData: CategoryData
  ) {

  }

  closeDialog( result ): void {
    this.dialogRef.close( result );
  }

  ngOnInit(){

  }

}
