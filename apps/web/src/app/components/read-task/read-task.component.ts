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

  getTask() {
    const id = this.route.snapshot.paramMap.get('id')
    this.fireservice.getDoc(id).subscribe((doc) => {
      if (doc.exists) {
        this.read = doc.data();
      } else {
        console.log('No such document!')
      }
    })
  }

  ngOnInit(): void {
    this.getTask()
  }

}
