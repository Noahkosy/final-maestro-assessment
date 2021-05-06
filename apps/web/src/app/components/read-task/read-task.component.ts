import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'apps/web/src/app/services/firestore.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'nxlp-read-task',
  templateUrl: './read-task.component.html',
  styleUrls: ['./read-task.component.scss']
})
export class ReadTaskComponent implements OnInit {

  constructor( private route: ActivatedRoute,
               private fireservice: FirestoreService) { 
  }

  read:any;

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.read = data;
    })
  }

}
