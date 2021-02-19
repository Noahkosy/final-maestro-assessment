import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor( public firestore: AngularFirestore ) {}

  createTask(data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore.collection("tasks").add(data).then(res => {},
        err => reject(err));
    })
  }

  getTasks() {
    return this.firestore.collection('tasks').valueChanges();
  }

  updateTask(data) {
    return this.firestore.collection("test").doc(data.payload.doc.id).set({ completed: true}, { merge: true})
  }

  deleteTask(data) {
    return this.firestore.collection("tasks").doc(data.payload.doc.id).delete()
  }
  

} 


