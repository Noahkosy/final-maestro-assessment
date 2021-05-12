import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { FirestoreService } from '../../core/services/firestore.service';
import { Task } from '../../shared/Interfaces/task-interface';
import { FutureDateValidation } from './future-date.validator';

@Component({
  selector: 'nxlp-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.scss'],
})

export class TaskAddComponent implements OnInit {

  formData: FormGroup;

  editData: Task;

  constructor(
    private firestore: FirestoreService,
    private builder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
  
    this.formData = this.builder.group({
      taskTitle: new FormControl ('', Validators.required),
      thumbnail: new FormControl (''),
      description: new FormControl (''),
      labels: new FormControl (''),
      duedate: new FormControl ('', FutureDateValidation),
      notes: new FormControl (''),
    })

    if(this.router.url.includes('edit')){
    this.editData = this.activatedRoute.snapshot.data.task;

    this.formData.setValue({
      taskTitle: this.editData.taskTitle,
      thumbnail: this.editData.thumbnail,
      description: this.editData.description,
      labels: this.editData.labels,
      duedate: this.editData.duedate,
      notes: this.editData.notes,
    });
    }
  }

  onSubmit(data) {
    this.firestore.createTask(data);
    alert('Your task has been submitted!');
    this.formData.reset();
  }
}
