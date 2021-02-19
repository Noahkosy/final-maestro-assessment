import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'apps/web/src/app/services/firestore.service'



@Component({
  selector: 'nxlp-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
  
})

export class AddTaskComponent implements OnInit {

  constructor( private firestore: FirestoreService) { }

  test = {
    title: "bob" ,
    description:'billy' ,
    labels: 'edd',
    date: 'james',
    notes: 'eard'
  }

  addTaskHandler(data) {
    this.firestore.createTask(data)
  }

  
  ngOnInit(): void {
    
  }

}
