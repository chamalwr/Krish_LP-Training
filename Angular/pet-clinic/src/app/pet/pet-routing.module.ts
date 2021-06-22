import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetCreateComponent } from './pet-create/pet-create.component';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetComponent } from './pet.component';
import {PetEditComponent} from './pet-edit/pet-edit.component';

const routes: Routes = [
  { path: '', component: PetComponent,
  children: [
    { path: 'list-pet', component: PetListComponent},
    { path: 'create-pet', component: PetCreateComponent},
    { path: 'edit-pet', component: PetEditComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PetRoutingModule { }
