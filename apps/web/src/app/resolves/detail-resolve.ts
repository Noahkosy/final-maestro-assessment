import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from "@angular/router";
import { Task } from "../resolves/task-interface";
import { Observable } from 'rxjs'
import { FirestoreService } from "../services/firestore.service";


@Injectable ({
    providedIn: 'root'
})

export class DetailResolve implements Resolve<Task>{

    constructor(
        private route: ActivatedRoute,
        private firestore: FirestoreService
    ) {}

    resolve(): Observable<any> | Promise<any> | any {
        const id = this.route.snapshot.paramMap.get('id')
        return this.firestore.getDoc(id);
    }

}