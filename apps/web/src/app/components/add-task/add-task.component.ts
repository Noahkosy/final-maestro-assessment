import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'apps/web/src/app/services/firestore.service';
import { FormControl, FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { PrefixValidation } from '../../validators/custom-validator';




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
    this.firestore.createTask(data);
    alert('Your task has been submitted!')
  }

  ngOnInit(): void {
    this.FormData = this.builder.group({
      taskTitle: new FormControl ('', [PrefixValidation]),
      thumbnail: new FormControl (''),
      description: new FormControl (''),
      labels: new FormControl (''),
      duedate: new FormControl (''),
      notes: new FormControl (''),
      rating: new FormControl ('',[Validators.required])
    })
  }

}
