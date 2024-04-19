import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { CommonModule, NgFor } from '@angular/common';
import { UserService } from '../../services/user/user.service';
import { UserCardComponent } from './user-card/user-card.component';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { HeaderComponent } from '../../header/header.component';

import { Store } from '@ngrx/store';

import { State } from '../../store/state.model';
import { setState } from '../../store/state.actions';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [CommonModule, UserCardComponent, PaginationComponent,MatProgressSpinnerModule,HeaderComponent],
  providers: [UserService],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css',
})
export class UsersListComponent implements OnInit {
  users: User[] = [];
  user?: User;
  currentPage: number = 1;
  loading: boolean = false;
  id?: number;
  idSearch?: number;
  constructor(
    private store: Store<{ state: { state: State } }>,
    private usersService: UserService
  ) {}
  ngOnInit(): void {
    this.loading = true;
    this.usersService.getUsers(this.currentPage).subscribe((data: any) => {
      this.store.dispatch(setState({ users: data.data }));
      this.users = data.data;
      this.loading = false;
    });
    this.store.select('state').subscribe((state: any) => {
      this.currentPage = state.currentPage;
      this.users = state.users;
      this.idSearch = state.idSearch;
      if (this.idSearch) {
        this.usersService.getUserByID(state.idSearch).subscribe((data) => {
          this.user = data.data;
        });
      } else {
        this.user = undefined;
        this.idSearch = undefined;
      }
    });
  }
}
