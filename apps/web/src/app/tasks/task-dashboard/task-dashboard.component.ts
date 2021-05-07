import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../core/services/firestore.service'

@Component({
  selector: 'nxlp-task-dashboard',
  templateUrl: './task-dashboard.component.html',
  styleUrls: ['./task-dashboard.component.scss']
})
export class TaskDashboardComponent implements OnInit {

  constructor( private firestore: FirestoreService) { }

  allTasks: any;

  color: string;

   getAllProducts(): void { 
    this.firestore.getTasks()
    .subscribe(res => (this.allTasks = res));
      console.log(this.allTasks)     
  }

  ngOnInit(): void { 
    this.getAllProducts();
  }

}
