import { Routes } from '@angular/router';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';

export const routes: Routes = [
  { path: '', redirectTo: '/users-list', pathMatch: 'full' },
  { path: 'users-list', component: UsersListComponent },
  { path: 'user-details', component: UserDetailsComponent },
];
