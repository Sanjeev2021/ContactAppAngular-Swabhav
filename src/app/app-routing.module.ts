import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './login/signup/signup.component';
import { SignInComponent } from './login/signin/signin.component';
import { HomeComponent } from './home/home.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { ViewUserComponent } from './user/view-user/view-user.component';
import { DeleteUserComponent } from './user/delete-user/delete-user.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { AddContactComponent } from './contact/add-contact/add-contact.component';
import { ViewContactComponent } from './contact/view-contact/view-contact.component';
import { UpdateContactComponent } from './contact/update-contact/update-contact.component';
import { DeleteContactComponent } from './contact/delete-contact/delete-contact.component';
import { AddContactinfoComponent } from './contactinfo/add-contactinfo/add-contactinfo.component';
import { ViewContactinfoComponent } from './contactinfo/view-contactinfo/view-contactinfo.component';
import { UpdateContactinfoComponent } from './contactinfo/update-contactinfo/update-contactinfo.component';
import { DeleteContactinfoComponent } from './contactinfo/delete-contactinfo/delete-contactinfo.component';
import { AddAdminComponent } from './admin/add-admin/add-admin.component';
import { ViewAdminComponent } from './admin/view-admin/view-admin.component';
import { DeleteAdminComponent } from './admin/delete-admin/delete-admin.component';
import { UpdateAdminComponent } from './admin/update-admin/update-admin.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'register',
    component: SignUpComponent
  },
  {
    path: 'login',
    component: SignInComponent
  },
  {
    path: 'add-user',
    component: AddUserComponent
  },
  {
    path:'view-user',
    component: ViewUserComponent
  },
  {
    path: 'delete-user',
    component: DeleteUserComponent
  },
  {
    path: 'update-user/:id',
    component: UpdateUserComponent
  },
  {
    path: ':id/add-contact',
    component: AddContactComponent
  },
  {
    path: ':id/view-contact',
    component: ViewContactComponent
  },
  {
    path: ':id/update-contact/',
    component: UpdateContactComponent
  },
  {
    path: ':id/delete-contact',
    component: DeleteContactComponent
  },
  {
    path: ':id/add-contactinfo',
    component: AddContactinfoComponent
  },
  {
    path: ':id/view-contactinfo',
    component: ViewContactinfoComponent
  },
  {
    path: ':id/delete-contactinfo',
    component: DeleteContactinfoComponent
  },
  {
    path: ':id/update-contactinfo/:referid',
    component: UpdateContactinfoComponent
  },
  {
    path: 'add-admin',
    component: AddAdminComponent
  },
  {
    path: 'view-admin',
    component: ViewAdminComponent
  },
  {
    path: 'delete-admin',
    component: DeleteAdminComponent
  },
  {
    path: 'update-admin/:id',
    component: UpdateAdminComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
