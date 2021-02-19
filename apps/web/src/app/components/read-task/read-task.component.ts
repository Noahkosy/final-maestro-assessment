import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'nxlp-read-task',
  templateUrl: './read-task.component.html',
  styleUrls: ['./read-task.component.scss']
})
export class ReadTaskComponent implements OnInit {

  read = {
    tags: 'Work',
    title: 'Loop Website Redesign',
    description: 'Redesign the site to reflect the evolvement of Loop. The site aims to be responsive and really cool.',
    date: '2/19/2021',
    notes: 'Sections: background story, product, price, about',
  }

  constructor(firestore: AngularFirestore) { 
  }

  ngOnInit(): void {
  }

}
