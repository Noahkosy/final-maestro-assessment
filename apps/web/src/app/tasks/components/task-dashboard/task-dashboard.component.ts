import { Component, OnInit } from '@angular/core';
import { TaskDataService } from '../../../core/services/task-data.service';
import { Task } from '../../../shared/Interfaces/task-interface';

@Component({
    selector: 'nxlp-task-dashboard',
    templateUrl: './task-dashboard.component.html',
    styleUrls: ['./task-dashboard.component.scss'],
})
export class TaskDashboardComponent implements OnInit {
    allTasks: Task[];

    constructor(private taskdata: TaskDataService) {}

    ngOnInit(): void {
        this.getAllTasks();
    }

    getAllTasks(): void {
        this.taskdata.getTasks().subscribe((res) => {
            this.allTasks = res.filter((x) => {
                return x.completed !== true;
            });
        });
    }

    // My attempt at rewriting getAllTasks() with async await. I'm really not sure why it isn't working.
    // Keeping it here to work on later if possible.

    // async getAllTasks() {
    //   const res = (await this.taskdata.getTasks().toPromise());
    //   this.allTasks = res;
    // }
}
