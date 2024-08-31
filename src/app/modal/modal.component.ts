import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { addToBoard } from '../store/task.actions';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {

  constructor(private http: HttpClient, private store: Store<any>) {

  }

  addNewTask() {
    //todo add task
    this.store.dispatch(addToBoard({
      task: 0
    }))
  }

}
