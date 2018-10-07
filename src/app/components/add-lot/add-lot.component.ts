import { Component, OnInit } from '@angular/core';
import { FormControl , Validators } from '@angular/forms';
import { AuthModalComponent } from '../../modals/auth.modal/auth.modal.component';

//MODELS
import { Lot } from '../../models/lot/Lot';
import { MatDialog } from '@angular/material';
import { AuthData} from '../../models/modal.data/auth.data';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-lot',
  templateUrl: './add-lot.component.html',
  styleUrls: ['./add-lot.component.css']
})
export class AddLotComponent implements OnInit {

  categories: string[] = ['Моб. Телефоны', 'Акссесуары'];

  types: string[] = ['Запланированный', 'Неме'];

  public lot: Lot = new Lot();

  selectedFile: File = null;

  public textFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[a-z]{4,30}$/i),
  ]);

  public descriptionFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[a-z0-9]{15,250}$/i),
  ]);

  public priceFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[0-9]{1,10}$/i),
  ]);

  onFileSelected(event){
    this.selectedFile = <File>event.target.files[0];
  }

  onUpload(){
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    this.http.post("localhost:4200/add-lot" , fd)
      .subscribe( res => {
        console.log(res);
      });
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
