import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { routes } from './app.routes';
import { provideStore, provideState } from '@ngrx/store';
import { taskReducer } from './store/task.reducers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    provideStore(),
    provideState({name: 'tasks', reducer: taskReducer})
]
};
