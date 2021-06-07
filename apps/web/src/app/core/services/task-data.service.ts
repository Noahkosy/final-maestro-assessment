import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Task } from '../../shared/Interfaces/task-interface';

@Injectable({
    providedIn: 'root',
})
export class TaskDataService {
    constructor(public firestore: AngularFirestore) {}

    createTask(data): Promise<Task> {
        return (this.firestore.collection('tasks').add(data) as any) as Promise<Task>;
    }

    getTasks(): Observable<Task[]> {
        return (this.firestore.collection('tasks').valueChanges({ idField: 'taskid' }) as any) as Observable<Task[]>;
    }

    getDoc(id: string): Observable<Task> {
        return (this.firestore.collection('tasks').doc(id).get() as any) as Observable<Task>;
    }

    updateTask(data: Task, id: string): Promise<void> {
        return this.firestore.collection('tasks').doc(id).set(data);
    }

    deleteTask(id: string): Promise<void> {
        return this.firestore.collection('tasks').doc(id).delete();
    }
}

// Found this when I was perusing the firebase docs. The arrow function, and its following elements, are only supposed to pull tasks whose
// completed property is set to false. Thought it cleaned up some of the code
// in my dashboard component. Will this work better than what is currently there?
// Link to doc: https://github.com/angular/angularfire/blob/master/docs/firestore/querying-collections.md

// getTasks():Observable<Task[]>{
//   return this.firestore.collection("tasks", ref => ref.where("completed", "==", false)).get() as any as Observable<Task[]>
// }
