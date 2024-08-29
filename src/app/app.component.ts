import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MockApiUrl } from "./constants";

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule],
})
export class AppComponent {
  componentTitle = "Task manager";

  async ngOnInit() {
    this.allTasks = await this.preloadTasks();
  }

  filter: "all" | "In Progress" | "Done" | "To Do" = "all";

  private preloadTasks = async () => {
    const mock_tasks = await fetch(`${MockApiUrl}GetAllTickets`, {
        method: 'GET',
        headers: { "Content-Type": "application/json" },
    })
    //notify
    const res =  await mock_tasks.json();
    console.log("00-FETCH->", res);
    return res
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