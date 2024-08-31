import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITask } from '../constants';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent {

  tasks: any[] = [];

  constructor(private http: HttpClient, private store: Store<any>) {

  }

  private showModal = false;

  ngOnChanges() {

  }
  ngOnInit() {
    this.preloadTasks();
    this.store.select('taskStore').subscribe(res => {
      this.tasks = res.tasks
    })
  }

  openModal() {
    this.showModal = !this.showModal;
  }

  private preloadTasks = async () => {
    
    this.http.get(`https://freetestapi.com/api/v1/todos`, {
      //"mode": 'no-cors'
    }).subscribe(config => {
      console.log('00-FETCH->', config)
    })
  }
}
