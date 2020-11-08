import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentsComponent } from './components/departments/departments.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { UserAddComponent } from './components/users/user-add/user-add.component';
import { UserDetailComponent } from './components/users/user-detail/user-detail.component';
import { UserEditComponent } from './components/users/user-edit/user-edit.component';
import { UserHomeComponent } from './components/users/user-home/user-home.component';
import { UsersComponent } from './components/users/users.component';


const routes: Routes = [
  { path: 'rooms', component: RoomsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id', component: UserHomeComponent,
      children: [
        { path: 'edit', component: UserEditComponent },
        { path: 'add', component: UserAddComponent },
        { path: 'detail', component: UserDetailComponent },
        { path: '', redirectTo: 'detail', pathMatch: 'full' },
        { path: '**', component: UserAddComponent }
      ]
  },

  { path: 'departments', component: DepartmentsComponent },

  { path: '', redirectTo: '/departments', pathMatch: 'full' },

  { path: '**', component: UsersComponent }
  // { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
