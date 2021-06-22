import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetRoutingModule } from './pet-routing.module';
import { PetComponent } from './pet.component';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetCreateComponent } from './pet-create/pet-create.component';
import { PetEditComponent } from './pet-edit/pet-edit.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    PetComponent,
    PetListComponent,
    PetCreateComponent,
    PetEditComponent
  ],
  imports: [
    CommonModule,
    PetRoutingModule,
    FormsModule
  ]
})
export class PetModule { }
