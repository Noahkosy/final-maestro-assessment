import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TaskDataService {

  constructor( public firestore: AngularFirestore ) {}

  createTask(data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore.collection("tasks").add(data).then(res => {},
        err => reject(err));
    })
  }

  getTasks() {
    return this.firestore.collection("tasks").valueChanges({ idField:'taskid'});
  }

  getDoc(id:string) {
    return this.firestore.collection("tasks").doc(id).get();
  }

  updateTask(data) {
    return this.firestore.collection("test").doc(data.payload.doc.id).set({ completed: true}, { merge: true})
  }

  deleteTask(data) {
    return this.firestore.collection("tasks").doc(data.payload.doc.id).delete()
  }
} 


