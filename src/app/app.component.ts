import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { Store, StoreModule } from '@ngrx/store';
import { stateReducer } from './store/state.reducer';
import { UserService } from './services/user/user.service';
import { State } from './store/state.model';
import { setState } from './store/state.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, HeaderComponent],
  providers: [UserService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    // this.store.select('state').subscribe((state: any) => {
    //   this.page = state.currentPage;
    //   console.log(this.page);
    // });
    // this.userService.getUsers(this.page).subscribe((data) => {
    //   this.store.dispatch(
    //     setState({
    //       users: data.data,
    //       loading: false,
    //       currentPage: data.page,
    //     })
    //   );
    // });
  }
}
