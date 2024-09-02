import { Component, inject, Input, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITask, hardcodedTasks } from '../constants';
import { Store } from '@ngrx/store';
import { initTasks, updateTask } from '../store/task.actions';
import { DialogService } from '@ngneat/dialog';
import { TaskFormComponent } from '../task-form/task-form.component';
import { TaskItemComponent } from '../task-item/task-item.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [TaskItemComponent, NgFor, NgIf],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent {

  //viewContainer for modal window
  @ViewChild('view', {static: true, read: ViewContainerRef})
  vcr!: ViewContainerRef;

  private dialog = inject(DialogService)

  @Input() tasks: ITask[] = [];

  constructor(
    private http: HttpClient,
    private store: Store<{tasks: any}>,
  ) {

  }

  currentDragged: any;

  ngOnChanges() {

  }
  ngOnInit() {
    this.preloadTasks();
    this.store.dispatch(initTasks({tasks: hardcodedTasks}))
    //on init subscribe to tasks store
    this.store.select('tasks').subscribe(res => {
      this.tasks = res.tasks
    })
  }

  openModal() {
    //open form for creating new task
    const dialogRef = this.dialog.open(TaskFormComponent, {
      data: {
        id: 0,
        title: 'new task',
        description: '',
        status: '',
        priority: '',
        startDate: new Date(),
        endDate: new Date()
      }
    })
  }

  private preloadTasks = async () => {
    //I couldn't find a suitable api, so I hardcoded the tasks and put them to global store.
    this.http.get('https://dummyjson.com/todos', {
      //"mode": 'no-cors'
      params: {
        "Content-Type": "application/json"
      }
    }).subscribe(res => {
      console.log('TASKS-API-RES->', res);
    })

  }

  //DragnDrop events
  onDragStart(task: ITask) {
    this.currentDragged = task
  }

  onDrop(event: any, status: string) {
    this.store.dispatch(updateTask({task: {...this.currentDragged, status: status}}))
  }

  onDragOver(event: any) {
    event.preventDefault();
  }
}
