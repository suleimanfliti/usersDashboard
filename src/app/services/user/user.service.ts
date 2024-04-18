import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, tap } from 'rxjs';
import { CacheService } from '../cache.service';
import { State } from '../../store/state.model';
import { Store } from '@ngrx/store';
import { setState } from '../../store/state.actions';

@Injectable()
export class UserService {
  constructor(
    private httpClient: HttpClient,
    private cacheService: CacheService,
    private store: Store<{ state: { state: State } }>
  ) {}

  public getUsers(page: number) {
    const cachedData = this.cacheService.get(`users ${page}`);
    if (cachedData) {
      return of(cachedData);
    }
    return this.httpClient
      .get<any>(`https://reqres.in/api/users/?page=${page}`)
      .pipe(
        tap((data: any) => {
          this.cacheService.put(`users ${page}`, data);
        })
      );
  }
}
