import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../../shared/Interfaces/task-interface';

@Component({
  selector: 'nxlp-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit {

  task:Task;

  constructor( private route: ActivatedRoute,) {}

  ngOnInit(): void {
    this.task = this.route.snapshot.data.task;
    console.log(this.task)
  }

}
