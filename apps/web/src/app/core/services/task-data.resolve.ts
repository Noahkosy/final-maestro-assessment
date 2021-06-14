import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { TaskDataService } from './task-data.service';

@Injectable()
export class TaskResolve implements Resolve<any> {
    constructor(private taskdata: TaskDataService) {}

    async resolve(snapshot: ActivatedRouteSnapshot) {
        const id = snapshot.paramMap.get('id');
        const taskData = (await this.taskdata.getDoc(id).toPromise()).data();
        return taskData;
    }

    // How do I specify typing on this? Is it any different because it comes in as an
    // observable that is converted to a promise.
}
