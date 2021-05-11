import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { FirestoreService } from "../services/firestore.service";

@Injectable()
export class FireResolver implements Resolve<any> {
    constructor(private firestore: FirestoreService) {}

    async resolve(snapshot: ActivatedRouteSnapshot) {
        const id = snapshot.paramMap.get('id');
        const result = (await this.firestore.getDoc(id).toPromise()).data();
        return result;
        
        
    }
}