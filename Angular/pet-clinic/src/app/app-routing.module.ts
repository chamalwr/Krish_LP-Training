import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'pet', loadChildren: () => import('./pet/pet.module').then(m => m.PetModule) }, { path: 'owner', loadChildren: () => import('./owner/owner.module').then(m => m.OwnerModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
