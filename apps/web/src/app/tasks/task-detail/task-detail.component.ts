import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../core/services/firestore.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'nxlp-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit {
  task:any;

  constructor( private route: ActivatedRoute,
               private firestore: FirestoreService) { 
              this.task = this.route.snapshot.data.task; 
              console.log(this.route.snapshot.data) 
  }

  getTask() {
    const id = this.route.snapshot.paramMap.get('id');
    this.firestore.getDoc(id).subscribe(data => this.task = data);
    console.log(this.task);
  }

  ngOnInit(): void {
    this.getTask();
  }

}
