import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { State } from '../store/state.model';
import { setState } from '../store/state.actions';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  search: string = '';
  constructor(private store: Store<{ state: { state: State } }>) {}
  onChangeFilter(event: any) {
    this.store.dispatch(
      setState({
        idSearch: event,
      })
    );
  }
}
