import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { MockApiUrl } from "./constants";
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
    const allTasks = await this.preloadTasks();
    console.log('00-ON-INIT->', allTasks)
    if (this.allTasks.length === 4) {
      //this.allTasks = allTasks
    }
  }

  filter: "all" | "In Progress" | "Done" | "To Do" = "all";

  private preloadTasks = async () => {
    // const mock_tasks = await fetch(`${MockApiUrl}GetAllTickets`, {
    //     method: 'GET',
    //     headers: { "Content-Type": "text/plain" },
    // })
    this.http.get(`${MockApiUrl}GetAllTickets`).subscribe(config => {
      console.log('00-FETCH->', config)
    })
  }

  allTasks = [
    {
      "ticketGuid": "",
      "ticketId": 244,
      "summary": "team",
      "storyPoint": 0,
      "status": "In Progress",
      "assignedTo": "Dinesh",
      "projectShortName": "Testing"
    },
    {
      "ticketGuid": "",
      "ticketId": 243,
      "summary": "kurthi",
      "storyPoint": 0,
      "status": "Done",
      "assignedTo": "Ram",
      "projectShortName": "meesho"
    },
    {
      "ticketGuid": "",
      "ticketId": 242,
      "summary": "hi",
      "storyPoint": 0,
      "status": "In Progress",
      "assignedTo": "Rahul Sakharkar",
      "projectShortName": "Testing"
    },
    {
      "ticketGuid": "",
      "ticketId": 241,
      "summary": "Update CodeTable, icis, wes publish logs to StatHub through REST endpoints.",
      "storyPoint": 0,
      "status": "To Do",
      "assignedTo": "Ram",
      "projectShortName": "meesho"
    },
  ];

  get tasks() {
    console.log('00-FILTER->', this.filter);
    if (this.filter === "all") {
      return this.allTasks;
    }
    return this.allTasks.filter((item) =>
      this.filter === "Done" ? item.status === "Done" : item.status !== "Done"
    );
  }
}