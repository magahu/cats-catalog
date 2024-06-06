import { Component, OnInit } from '@angular/core';
import { CatsService } from 'src/app/core/services/cats.service';
import { Breed } from 'src/app/models/breed-response.models';
import { CatsModalComponent } from '../cats-modal/cats-modal.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})
export class CatsComponent implements OnInit {

  constructor(private catsService: CatsService, public dialog: MatDialog) { }

  breedsList: Breed[] = [];
  breed: Breed[] = [];

  ngOnInit(): void {
    this.catsService.searchCatBreeds().subscribe((response)=>{
      //console.log(response);
      this.breedsList = response;
    })
  }

  goToCat(id: string){
    console.log(id);
    this.catsService.searchBreed(id).subscribe((response)=>{
      this.breed = response;
      console.log(response)
      this.openDialog();
    })
    
  }

  //showCat(){
  //  alert('LLEGARON LOS DATOS DEL GATO '+this.breed[0].name)
  //}

  openDialog(): void {
    const dialogRef = this.dialog.open(CatsModalComponent, {
      width: '250px',
      data: this.breed[0]
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
