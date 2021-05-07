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
               private fireservice: FirestoreService) { 
  }

  read:any;

  getTask() {
    const id = this.route.snapshot.paramMap.get('id');
    this.fireservice.getDoc(id).subscribe(res => {
      this.read = res;
    })
  }

  ngOnInit(): void {
    this.getTask()
  }

}
