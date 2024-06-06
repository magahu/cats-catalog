import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatsRoutingModule } from './cats-routing.module';
import { CatsComponent } from './components/cats/cats.component';
import { CatComponent } from './components/cat/cat.component';

import { MaterialModule } from '../material/material.module';
import { CatsModalComponent } from './components/cats-modal/cats-modal.component';

@NgModule({
  declarations: [
    CatsComponent,
    CatComponent,
    CatsModalComponent
  ],
  imports: [
    CommonModule,
    CatsRoutingModule,
    MaterialModule
  ]
})
export class CatsModule { }
