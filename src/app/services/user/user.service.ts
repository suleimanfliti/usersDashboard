import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, tap } from 'rxjs';
import { CacheService } from '../cache.service';

@Injectable()
export class UserService {
  constructor(
    private httpClient: HttpClient,
    private cacheService: CacheService
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
          // this.store.dispatch(
          //   setState({
          //     users: data.data,
          //     currentPage: data.page,
          //   })
          // );
        })
      );
  }

  public getUserByID(id: number) {
    // const cachedData = this.cacheService.get(`user`);
    // if (cachedData) {
    //   return of(cachedData);
    // }
    return this.httpClient.get<any>(`https://reqres.in/api/users/${id}`).pipe(
      tap((data: any) => {
        this.cacheService.put(`user`, data);
        // this.store.dispatch(
        //   setState({
        //     users: data.data,
        //     currentPage: data.page,
        //   })
        // );
      })
    );
  }
}
