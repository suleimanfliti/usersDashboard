import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../store/state.model';
import { setState } from '../../store/state.actions';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',
})
export class PaginationComponent implements OnInit {
  pageNumber: number = 2;
  currentPage: number = 1;

  constructor(
    private store: Store<{ state: { state: State } }>,
    private userService: UserService
  ) {}
  ngOnInit(): void {
    this.store.select('state').subscribe((state: any) => {
      this.currentPage = state.currentPage;
    });
  }

  clickItem(item: any) {
    if (item === 'previous' && this.currentPage - 1 > 0) {
      this.currentPage = this.currentPage - 1;
    } else if (item === 'next' && this.currentPage + 1 <= 2) {
      this.currentPage = this.currentPage + 1;
    } else if (item > 0 && item <= 2) {
      this.currentPage = item as number;
    }
    this.store.dispatch(setState({ currentPage: this.currentPage }));
    this.userService.getUsers(this.currentPage).subscribe((data) => {
      this.store.dispatch(setState({ users: data.data }));
    });
  }
}
