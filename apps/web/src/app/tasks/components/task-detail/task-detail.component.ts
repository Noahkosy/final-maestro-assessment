import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskDataService } from '../../../core/services/task-data.service';
import { Task } from '../../../shared/Interfaces/task-interface';

@Component({
    selector: 'nxlp-task-detail',
    templateUrl: './task-detail.component.html',
    styleUrls: ['./task-detail.component.scss'],
})
export class TaskDetailComponent implements OnInit {
    task: Task;

    id: string;

    constructor(
        private route: ActivatedRoute,
        private taskdata: TaskDataService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.task = this.route.snapshot.data.task;

        this.id = this.activatedRoute.snapshot.paramMap.get('id');
    }

    async markCompleted(): Promise<void> {
        await this.taskdata.updateTask(
            {
                taskTitle: this.task.taskTitle,
                thumbnail: this.task.thumbnail,
                labels: this.task.labels,
                dueDate: this.task.dueDate,
                description: this.task.description,
                notes: this.task.notes,
                completed: true,
                taskid: null,
                data: null,
            },
            this.id
        );
        location.replace('tasks');
    }
}
