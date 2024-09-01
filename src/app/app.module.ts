import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BoardComponent } from "./board/board.component";
import { TaskItemComponent } from "./task-item/task-item.component";
import { BrowserModule } from "@angular/platform-browser";
import { StoreModule } from "@ngrx/store";
import { taskReducer } from "./store/task.reducers";

@NgModule({
    declarations: [],
    imports: [
        BrowserModule,
        StoreModule.forRoot({tasks: taskReducer})
    ],
    providers: [],
})
export class AppModule {}