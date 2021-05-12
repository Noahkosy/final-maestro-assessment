import { Component, OnInit } from '@angular/core';
import { TaskDataService } from '../../../core/services/task-data.service'

@Component({
  selector: 'nxlp-task-dashboard',
  templateUrl: './task-dashboard.component.html',
  styleUrls: ['./task-dashboard.component.scss']
})
export class TaskDashboardComponent implements OnInit {

  allTasks: any;

  constructor( private taskdata: TaskDataService) { }
 
  ngOnInit(): void { 
    this.getAllProducts();
  }

  getAllProducts(): void { 
    this.taskdata.getTasks().subscribe(res => (this.allTasks = res));     
  }

}
