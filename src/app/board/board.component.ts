import { Component, Input, Output, EventEmitter } from '@angular/core';
import { iTask } from '../task';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent {

  @Input() tasks: any[] | undefined;

  @Output() newTaskEvent = new EventEmitter<iTask>()

  ngOnChanges() {

  }
  ngOnInit() {

  }

  openModal() {
    
  }

  addNewTask(value: iTask) {
    this.newTaskEvent.emit(value)
  }
}
