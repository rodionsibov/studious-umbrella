import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './components/post/post.component';
import { UserComponent } from './components/user/user.component';
import { MaterialModule } from '../material/material.module';
import { TableComponent } from './components/table/table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserListService } from './services/user-list.service';

const UserListComponents = [
  PostComponent,
  UserComponent,
  PostComponent,
  TableComponent,
];

@NgModule({
  declarations: [UserListComponents],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  exports: [UserListComponents, MaterialModule],
  providers: [UserListService]
})
export class UserListModule {}
