import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'apps/web/src/app/services/firestore.service'
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms'



@Component({
  selector: 'nxlp-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
  
})

export class AddTaskComponent implements OnInit {

  constructor(
    private firestore: FirestoreService,
    private builder: FormBuilder,
  ) { }

  FormData: FormGroup;

  onSubmit(data) {
    this.firestore.createTask(data)
  }

  ngOnInit(): void {
    this.FormData = this.builder.group({
      title: new FormControl ('',[Validators.required]),
      thumbnail: new FormControl (''),
      description: new FormControl (''),
      labels: new FormControl (''),
      duedate: new FormControl ('',[Validators.required]),
      notes: new FormControl (''),
    })
  }

}
