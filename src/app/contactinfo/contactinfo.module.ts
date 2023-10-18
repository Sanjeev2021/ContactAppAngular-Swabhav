import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddContactinfoComponent } from './add-contactinfo/add-contactinfo.component';
import { ViewContactinfoComponent } from './view-contactinfo/view-contactinfo.component';
import { UpdateContactinfoComponent } from './update-contactinfo/update-contactinfo.component';
import { DeleteContactinfoComponent } from './delete-contactinfo/delete-contactinfo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddContactinfoComponent,
    ViewContactinfoComponent,
    UpdateContactinfoComponent,
    DeleteContactinfoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ContactinfoModule { }
