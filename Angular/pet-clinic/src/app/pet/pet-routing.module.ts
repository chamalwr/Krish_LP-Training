import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetCreateComponent } from './pet-create/pet-create.component';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetComponent } from './pet.component';

const routes: Routes = [
  { path: '', component: PetComponent, 
  
  children: [
    { path: 'list-pet', component: PetListComponent}, 
    { path: 'create-pet', component: PetCreateComponent}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PetRoutingModule { }
