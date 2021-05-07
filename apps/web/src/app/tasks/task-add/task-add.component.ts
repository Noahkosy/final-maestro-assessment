import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, } from '@angular/forms';
import { FirestoreService } from '../../core/services/firestore.service';

@Component({
  selector: 'nxlp-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.scss'],
})

export class TaskAddComponent implements OnInit {

  constructor(
    private firestore: FirestoreService,
    private builder: FormBuilder,
  ) { }

  FormData: FormGroup;

  onSubmit(data) {
    this.firestore.createTask(data);
    alert('Your task has been submitted!');
    this.FormData.reset()
    // window.location.assign('') ** or just send back to home **
  }

  ngOnInit(): void {
    this.FormData = this.builder.group({
      taskTitle: new FormControl (''),
      thumbnail: new FormControl (''),
      description: new FormControl (''),
      labels: new FormControl (''),
      duedate: new FormControl (''),
      notes: new FormControl (''),
      rating: new FormControl ('')
    })
  }

}
