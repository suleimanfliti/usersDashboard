import { Component, Input } from '@angular/core';
import { User } from '../../user';
import { Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from '../../../store/state.model';
import { setState } from '../../../store/state.actions';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css',
})
export class UserCardComponent {
  @Input() user?: User;
  constructor(
    private store: Store<{ state: { state: State } }>,
    private router: Router
  ) {}
  clickMoreDetails() {
    //save id in state .
    this.store.dispatch(setState({ id: this.user?.id }));
    this.router.navigate(['/', 'user-details']);
  }
}
