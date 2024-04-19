import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { UserService } from './services/user/user.service';
import { CacheService } from './services/cache.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CachingInterceptor } from './http-interceptor/http-interceptor';
import { stateReducer } from './store/state.reducer';
import { provideState, provideStore } from '@ngrx/store';

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore(),
    provideState({ name: 'state', reducer: stateReducer }),
    provideRouter(routes),
    UserService,
    CacheService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CachingInterceptor,
      multi: true,
    },
  ],
};
