import { Component, OnInit } from '@angular/core';
import { FormControl , Validators } from '@angular/forms';
import { AuthModalComponent } from '../../modals/auth.modal/auth.modal.component';

//MODELS
import { Lot } from '../../models/lot/Lot';
import { Category } from '../../models/category/Category';
import { LotType } from '../../models/lot-type/LotType';
import { MatDialog } from '@angular/material';
import { AuthData} from '../../models/modal.data/auth.data';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-lot',
  templateUrl: './add-lot.component.html',
  styleUrls: ['./add-lot.component.css']
})
export class AddLotComponent implements OnInit {

  public selectedCategory: Category = null;
  public selectedType: LotType = null;

  public categories: Category[] = [
    new Category( 1 , 'Моб. Телефоны'),
    new Category( 2, 'Акссесуары')
  ];

  public lotTypes: LotType[] = [
    new LotType( 1 , 'Запланированный'),
    new LotType( 2, 'Немедленный')
  ];

  public lot: Lot = new Lot();

  selectedFile: File[] = [];

  public textFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[a-zа-я]{4,30}$/i),
  ]);

  public descriptionFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[a-zа-я0-9 ]{15,250}$/i),
  ]);

  public priceFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[1-9]\d{0,7}(?:\.\d{1,4})?|\.\d{1,4}$/),
  ]);

  onFileSelected(event){
    this.selectedFile = <File[]>event.target.files;
  }

  onUpload(){

  }//

  typeChange(event){
    this.lot.lotType = event.value;
  }

  constructor(public dialog: MatDialog , private http: HttpClient) {
  }

  addLot( event ){

    const authData: AuthData = new class implements AuthData {
      message: string;
    };

    authData.message = "Лот добавлен!";

    if ( event instanceof KeyboardEvent && event.code === "Enter" ){
      this.openDialog(authData);
    }//if
    else if ( event instanceof  MouseEvent){
      this.openDialog(authData);
    }//else if


  }//authorize

  openDialog( authData: AuthData ): void {

    const dialogRef = this.dialog.open(AuthModalComponent, {
      width: '400px',
      data: authData
    });

  }//openDialog

  ngOnInit() {
  }

}
