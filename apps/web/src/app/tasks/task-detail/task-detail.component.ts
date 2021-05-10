import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../core/services/firestore.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'nxlp-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit {

  constructor( private route: ActivatedRoute,
               private firestore: FirestoreService) { 
  }

  task:any;

  getTask() {
    const id = this.route.snapshot.paramMap.get('id');
    this.firestore.getDoc(id);
    console.log(this.task);
  }

  ngOnInit(): void {
    this.getTask();
  }

}
