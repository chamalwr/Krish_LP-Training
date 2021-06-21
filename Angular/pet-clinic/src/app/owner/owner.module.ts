import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerComponent } from './owner.component';
import { OwnerListComponent } from './owner-list/owner-list.component';
import { OwnerCreateComponent } from './owner-create/owner-create.component';
import { OwnerEditComponent } from './owner-edit/owner-edit.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    OwnerComponent,
    OwnerListComponent,
    OwnerCreateComponent,
    OwnerEditComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    FormsModule
  ]
})
export class OwnerModule { }
