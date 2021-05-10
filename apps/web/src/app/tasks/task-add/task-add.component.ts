import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Form, Validators, } from '@angular/forms';
import { FirestoreService } from '../../core/services/firestore.service';
import { FutureDateValidation } from './future-date.validator';

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

  formData: FormGroup;

  onSubmit(data) {
    this.firestore.createTask(data);
    alert('Your task has been submitted!');
    this.formData.reset();
    // window.location.assign('') ** or just send back to home **
  }

  validStatement(form: FormGroup){
    console.log('Valid?', form.valid);
    console.log('duedate', form.value.duedate);
  }

  ngOnInit(): void {
    this.formData = this.builder.group({
      taskTitle: new FormControl ('', Validators.required),
      thumbnail: new FormControl (''),
      description: new FormControl (''),
      labels: new FormControl (''),
      duedate: new FormControl ('', FutureDateValidation),
      notes: new FormControl (''),
    })
  }

}
