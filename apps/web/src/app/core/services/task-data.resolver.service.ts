import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { TaskDataService } from "./task-data.service";

@Injectable()
export class TaskResolver implements Resolve<any> {

    constructor(private taskdata: TaskDataService) {}

    async resolve(snapshot: ActivatedRouteSnapshot) {
        const id = snapshot.paramMap.get('id');
        const result = (await this.taskdata.getDoc(id).toPromise()).data();
        return result;
        
    }
}