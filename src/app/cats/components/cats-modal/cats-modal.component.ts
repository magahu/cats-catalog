import { Component, OnInit, Inject, Input } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Breed } from 'src/app/models/breed-response.models';


@Component({
  selector: 'app-cats-modal',
  templateUrl: './cats-modal.component.html',
  styleUrls: ['./cats-modal.component.scss']
})
export class CatsModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CatsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Breed,
    ) { }

  ngOnInit(): void {
  }

}
