import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Task } from '../../shared/Interfaces/task-interface';

@Injectable({
  providedIn: 'root'
})
export class TaskDataService {

  constructor( public firestore: AngularFirestore ) {}

  createTask(data) {
    return this.firestore.collection("tasks").add(data);  
  }

  getTasks() {
    return this.firestore.collection("tasks").valueChanges({ idField:'taskid'});
  }

  getDoc(id:string) {
    return this.firestore.collection("tasks").doc(id).get();
  }

  updateTask(data: Task, id) {
    return this.firestore.collection("tasks").doc(id).set(data)
  }

  deleteTask(id) {
    return this.firestore.collection("tasks").doc(id).delete()
  }
} 


