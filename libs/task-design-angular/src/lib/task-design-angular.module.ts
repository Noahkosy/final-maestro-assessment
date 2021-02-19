import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { defineCustomElements } from '@nxlp/task-design/loader';

defineCustomElements(window);

@NgModule({
  imports: [CommonModule],
})
export class TaskDesignAngularModule {}
