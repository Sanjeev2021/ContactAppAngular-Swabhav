import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { DeleteContactComponent } from './delete-contact/delete-contact.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddContactComponent,
    ViewContactComponent,
    DeleteContactComponent,
    UpdateContactComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ContactModule { }
