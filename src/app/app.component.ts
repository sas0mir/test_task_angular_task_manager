import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { BoardComponent } from "./board/board.component";
import { takeUntil } from "rxjs";

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, BoardComponent],
})
export class AppComponent {

  constructor(private http:HttpClient) {

  }
  title = "Task manager"
  componentTitle = "Task manager";

  async ngOnInit() {
    
  }

}