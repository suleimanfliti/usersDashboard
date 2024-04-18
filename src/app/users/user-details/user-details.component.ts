import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../store/state.model';
import { User } from '../user';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

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
  constructor(private store: Store<{ state: { state: State } }>) {}
  ngOnInit(): void {
    this.store.select('state').subscribe((state: any) => {
      this.loading = false;
      this.id = state.id;
      this.user = state.users.filter((item: User) => item.id === this.id)[0];
      console.log(this.user);
    });
  }
}
