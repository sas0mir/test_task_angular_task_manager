import { ChangeDetectionStrategy, Component, inject, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DialogService, DialogRef } from '@ngneat/dialog';
import { ITask } from '../constants';
import { Store } from '@ngrx/store';
import { addTask, updateTask, removeTask } from '../store/task.actions';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TaskFormComponent {

  constructor(private store: Store<{tasks: any}>, private http: HttpClient) {}

  ref: DialogRef<ITask, boolean> = inject(DialogRef)

  newTask: ITask = {
    id: 0,
    title: '',
    description: '',
    status: '',
    priority: '',
    startDate: new Date(),
    endDate: new Date()
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('TASK-FORM-CHANGE->', changes['data'], changes);

  }

  get title() {
    if (!this.ref.data) return "new task" 
    return this.ref.data.title
  }

  setTaskField(field: string, event: any) {
    const keyObj = {[field]: field === 'endDate' ? new Date(event.target?.value) : event.target?.value}
    this.newTask = {...this.newTask, ...keyObj}
  }

  saveTask() {
    console.log('SAVE->', this.newTask, this.ref.data);
    if (this.ref.data.id === 0) {
      let newIndex = 0;
      this.store.select('tasks').subscribe(res => {
        newIndex = res.tasks.length + 1
      })
      this.store.dispatch(addTask({task: {...this.newTask, id: newIndex}}))
      // this.http.post('https://dummyjson.com/todos/save', {
      //   body: this.newTask,
      //   params: {
      //     "Content-Type": "application/json",
      //   }
      // }).subscribe(res => {
      //   console.log('TASKS-API-RES->', res);
      // })
    } else {
      // for (const [key, value] of Object.entries(this.newTask)) {
      //   if(!value) this.newTask[key] = this.ref.data[key] 
      // }
      this.store.dispatch(updateTask({task: {...this.newTask, id: this.ref.data?.id}}))
      // this.http.post('https://dummyjson.com/todos/update', {
      //   body: this.newTask,
      //   params: {
      //     "Content-Type": "application/json",
      //   }
      // }).subscribe(res => {
      //   console.log('TASKS-API-RES->', res);
      // })
    }
    this.ref.close()
  }

  deleteTask() {
    this.store.dispatch(removeTask({task: this.ref.data}))
    this.ref.close()
  }
}