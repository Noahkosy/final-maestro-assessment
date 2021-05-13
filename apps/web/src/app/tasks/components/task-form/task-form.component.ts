import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TaskDataService } from '../../../core/services/task-data.service';
import { FormActionEnum } from '../../../shared/Interfaces/form-action.enum';
import { futureDateValidation } from '../../../shared/validators/future-date.validator';

@Component({
  selector: 'nxlp-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})

export class TaskFormComponent implements OnInit {

  form: FormGroup;

  isEdit: boolean;

  id: string;

  constructor(
    private taskdata: TaskDataService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this.isEdit = this.activatedRoute.snapshot.data.formAction === FormActionEnum.EDIT;

    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  
    this.form = this.fb.group({
      taskTitle:['', Validators.required],
      thumbnail: [''],
      description: [''],
      labels: [''],
      duedate: ['', futureDateValidation],
      notes: [''],
    })

    if(this.isEdit){
      this.form.patchValue(this.activatedRoute.snapshot.data.task);
    }
  }

  async onSubmit(data) {
    if (this.isEdit){
      await this.taskdata.updateTask(this.form.value, this.id);
      alert('Your task has been updated!');
      location.replace('tasks');
    } else {
      await this.taskdata.createTask(data);
      alert('Your task has been submitted!');
      this.form.reset();
      location.replace('tasks')
    }
  }

  deleteTask() {
    this.taskdata.deleteTask(this.id);
    location.replace('tasks');
  }
}
