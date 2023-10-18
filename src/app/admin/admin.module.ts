import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewAdminComponent } from './view-admin/view-admin.component';
import { DeleteAdminComponent } from './delete-admin/delete-admin.component';
import { UpdateAdminComponent } from './update-admin/update-admin.component';

@NgModule({
  declarations: [
    AddAdminComponent,
    ViewAdminComponent,
    DeleteAdminComponent,
    UpdateAdminComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminModule { }
