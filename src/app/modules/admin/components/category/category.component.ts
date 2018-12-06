import { Component, OnInit, ViewChild} from '@angular/core';
import {Category} from '../../models/category/Category';
import { FormControl , Validators } from '@angular/forms';
import {MatPaginator, MatSort, MatTable, MatTableDataSource} from '@angular/material';
import { DeleteCategoryModalComponent } from '../../modals/deleteCategory.modal/deleteCategory.modal.component';
import { CategoryData } from '../../models/modal.category/category.data';
import { Constants } from '../../models/Constants';

import { MatDialog } from '@angular/material';
import {CategoryService} from "../../services/category/category.service";
import {ServerResponse} from "../../models/server/ServerResponse";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  displayedColumns: string[] = ['title', 'update', 'delete'];
  dataSource: MatTableDataSource<Category>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @ViewChild('categoryTable') categoryTable: MatTable<Category>;

  public categories: Category[];
  public cat: Category = new Category('', '');
  public visib: boolean;

  public formControls: FormControl[] = [];

  public categoryNameFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[a-z,а-я,0-9, ]{2,20}$/i),
  ]);

  constructor(
    public dialog: MatDialog,
    private categoryService: CategoryService
  ) {

    this.visib = false;

    console.log(this.categories);

    this.categoryService.getCategories(
      Constants.APP_OFFSET,
      Constants.APP_LIMIT
    ).then( this.onCategoryResponse.bind(this) );

  }

  onCategoryResponse(response: ServerResponse){

    console.log(response);

    try{

        if( response.status === 200 ){

          this.categories = response.data as Category[];

          this.dataSource = new MatTableDataSource(this.categories);

          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;

          for ( let i = 0 ; i < this.categories.length ; i++ ) {

            this.formControls.push( new FormControl('', [
              Validators.required,
              Validators.pattern(/^[a-z,а-я,0-9, ]{2,20}$/i),
            ]));

          }// for

        }//if

    }//try
    catch(ex){

      console.log( "Exception: " , ex );

    }//catch

  }//onCategoryResponse

  ngOnInit() {


  }// ngOnInit

  addForm() {
    this.cat.title = '';
    this.visib = !this.visib;
  }

  async addCategory(event) {

    if ( this.categoryNameFormControl.hasError('required') || this.categoryNameFormControl.hasError('pattern')) {
      return;
    }

    if ( this.categoryNameFormControl.hasError('required') ) {
      return;
    }

    if ( event instanceof KeyboardEvent && event.code === 'Enter' ) {
      this.visib = false;
    } else if ( event instanceof  MouseEvent) {
      this.visib = false;
    }

    try{

      const response: ServerResponse = await this.categoryService.addCategory( this.cat.title );

      console.log('response: ' , response );

      if ( response.status === 200 ){

        const category: Category = response.data as Category;

        this.categories.push( category);

        this.formControls.push( new FormControl('', [
          Validators.required,
          Validators.pattern(/^[a-z,а-я,0-9, ]{2,20}$/i),
        ]));

        this.categoryTable.dataSource = this.categories;

        this.categoryTable.renderRows();

      }//if

    }//try
    catch(ex){

      console.log('ADD CATEGORY EX:' , ex );

    }//catch

  }

  delete( event , category:Category ) {

    console.log('category for delete: ' , category);

    this.openDialog({
      categoryID: category._id,
      categoryTitle: category.title,
    });

  }// delete

  openDialog(catData: CategoryData ): void {

    console.log('openDialog.catData: ' , catData);

    const dialogRef = this.dialog.open(DeleteCategoryModalComponent, {
      width: '400px',
      data: catData
    });

    dialogRef.afterClosed().subscribe( async ( result ) => {

      if( result === true ){

        console.log( 'catData: ' , catData );

        const response: any = await this.categoryService.removeCategory( catData.categoryID );
        console.log('response: ' , response);

        //
        // const category = this.categories.find( ( categ: Category ) => {
        //   return categ.id === this.cat.id;
        // } );
        //
        // const index = this.categories.indexOf(category);
        //
        // this.categories.splice( index , 1 );
        //
        // this.categoryTable.dataSource = this.categories;
        // this.categoryTable.renderRows();

      }//if

    } );

  }//openDialog


}
