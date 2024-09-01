import { Routes } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { taskReducer } from './store/task.reducers';
import { provideState } from '@ngrx/store';

export const routes: Routes = [
    {
        path: 'board',
        component: BoardComponent,
        title: 'board',
        providers: [
            provideState({name: 'tasks', reducer: taskReducer})
        ]
    },
    {path: '', redirectTo: '/board', pathMatch: 'full'},
];
