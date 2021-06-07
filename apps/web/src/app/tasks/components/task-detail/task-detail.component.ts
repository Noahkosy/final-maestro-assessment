import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskDataService } from '../../../core/services/task-data.service';
import { Task } from '../../../shared/Interfaces/task-interface';

@Component({
  selector: 'nxlp-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit {

  task: Task;

  id: string;

  constructor( 
    private route: ActivatedRoute,
    private taskdata: TaskDataService,
    private activatedRoute: ActivatedRoute,
    ) {}

  ngOnInit(): void {
    this.task = this.route.snapshot.data.task;
    
    this.id = this.activatedRoute.snapshot.paramMap.get('id')

    console.log(this.task)
  }

  // async markCompleted(){
  //   await this.taskdata.updateTask(this.task.description, this.id)
  // }

}
