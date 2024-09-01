import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITask, hardcodedTasks } from '../constants';
import { Store } from '@ngrx/store';
import { ModalComponent } from '../modal/modal.component';
import { ModalService } from '../modal/modal.service';
import { initTasks } from '../store/task.actions';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent {

  @ViewChild('view', {static: true, read: ViewContainerRef})
  vcr!: ViewContainerRef;

  tasks: ITask[] = [];

  constructor(
    private http: HttpClient,
    private store: Store<{tasks: any}>,
    private modalService: ModalService
  ) {

  }

  private showModal = false;

  ngOnChanges() {

  }
  ngOnInit() {
    this.preloadTasks();
    this.store.dispatch(initTasks({tasks: hardcodedTasks}))
    //on init subscribe to tasks store
    this.store.select('tasks').subscribe(res => {
      console.log('STORE-SUBSCRIBE->', res);
      this.tasks = res.tasks
    })
  }

  openModalTemplate(view: TemplateRef<Element>) {
    this.modalService.open(this.vcr, view, {
      animations: {
        modal: {
          enter: 'enter-slide-down 0.8s',
        },
        overlay: {
          enter: 'fade-in 0.8s',
          leave: 'fade-out 0.3s forwards',
        },
      },
      size: {
        width: '40rem',
      },
    });
  }

  openModal() {
    this.showModal = !this.showModal;
    
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
}
