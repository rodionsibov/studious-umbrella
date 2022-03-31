import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UsersComponent } from './users/users.component';
import { PostComponent } from './post/post.component';

import { StoreModule } from '@ngrx/store';
import { MaterialModule } from './material/material.module';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [AppComponent, UsersComponent, PostComponent, UserComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
