import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  { path: 'View', component:ViewProfileComponent,title:'view Page' },
  { path: 'Edit', component:EditProfileComponent,title:'Edit Page' },

]

@NgModule({
  declarations: [
    ViewProfileComponent,
    EditProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ]
})
export class UserModule { }
