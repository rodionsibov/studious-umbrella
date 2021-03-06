import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { MaterialModule } from '../shared/modules/material/material.module';
import { UserListComponent } from './components/user-list/user-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserListService } from './services/user-list.service';
import { PostsComponent } from './components/posts/posts.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/reducers';
import { UserListEffects as UserListEffects } from './store/effects';
import { DialogComponent } from '../shared/modules/dialog/components/dialog/dialog.component';

const UserListComponents = [EditUserComponent, UserListComponent, PostsComponent];

const routes: Routes = [
  {
    path: 'dialog',
    component: DialogComponent,
  },
];

@NgModule({
  declarations: [UserListComponents],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('user-list', reducers),
    EffectsModule.forFeature([UserListEffects]),
  ],
  exports: [UserListComponents, MaterialModule],
  providers: [UserListService],
})
export class UserListModule {}
