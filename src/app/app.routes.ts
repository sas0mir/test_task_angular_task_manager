import { Routes } from '@angular/router';
import { BoardComponent } from './board/board.component';

export const routes: Routes = [
    {path: 'board', component: BoardComponent, title: 'board'},
    {path: '', redirectTo: '/board', pathMatch: 'full'}
];
