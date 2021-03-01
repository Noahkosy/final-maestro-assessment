import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'apps/web/src/app/services/firestore.service'

@Component({
  selector: 'nxlp-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor( private firestore: FirestoreService) { }

  allTasks: any;

   getAllProducts(): void { 
    this.firestore.getTasks()
    .subscribe(res => (this.allTasks = res));
      console.log(this.allTasks)
      
  }

  ngOnInit(): void { 
    this.getAllProducts();
  }

}
