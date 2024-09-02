import { Component, inject, Input, SimpleChanges, ViewChild, ViewContainerRef } from '@angular/core';
import { ITask } from '../constants';
import { DialogService } from '@ngneat/dialog';
import { TaskFormComponent } from '../task-form/task-form.component';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss'
})
export class TaskItemComponent {

  @Input() task: any
  customClass: string = ''

  @ViewChild('view', {static: true, read: ViewContainerRef})
  vcr!: ViewContainerRef;

  private dialog = inject(DialogService)

  ngOnChanges(changes: SimpleChanges) {
    this.customClass = changes['task'].currentValue.priority === 'high' ? 'text-red' : 'text-green';
  }

  openEditModal() {
    const dialogRef = this.dialog.open(TaskFormComponent, {
      data: this.task
    })
  }
}
