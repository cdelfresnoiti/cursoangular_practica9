import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { UserDetailComponent } from './components/users/user-detail/user-detail.component';
import { UserEditComponent } from './components/users/user-edit/user-edit.component';
import { UserAddComponent } from './components/users/user-add/user-add.component';
import { UserHomeComponent } from './components/users/user-home/user-home.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    RoomsComponent,
    DepartmentsComponent,
    UserDetailComponent,
    UserEditComponent,
    UserAddComponent,
    UserHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
