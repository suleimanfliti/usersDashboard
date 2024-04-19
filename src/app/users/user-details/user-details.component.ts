import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../store/state.model';
import { User } from '../user';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user/user.service';
import { setState } from '../../store/state.actions';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
})
export class UserDetailsComponent implements OnInit {
  id: number = 0;
  user?: User;
  loading: boolean = true;
  constructor(
    private store: Store<{ state: { state: State } }>,
    private userService: UserService,
    private routerActive: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.routerActive.params.subscribe(({ id }) => {
      this.userService.getUserByID(id).subscribe((data) => {
        this.user = data.data;
      });
    });
  }
  setPrevius() {
    this.store.dispatch(setState({ id: undefined }));
  }
}
