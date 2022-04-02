import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './components/user/user.component';
import { MaterialModule } from '../shared/modules/material/material.module';
import { TableComponent } from './components/table/table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserListService } from './services/user-list.service';
import { PostsComponent } from './components/posts/posts.component';
import { RouterModule, Routes } from '@angular/router';

const UserListComponents = [UserComponent, TableComponent, PostsComponent];

const routes: Routes = [
  {
    path: 'user',
    component: PostsComponent,
  },
];

@NgModule({
  declarations: [UserListComponents],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [UserListComponents, MaterialModule],
  providers: [UserListService],
})
export class UserListModule {}
