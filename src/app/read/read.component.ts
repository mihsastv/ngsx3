import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Tutorial} from '../models/tutorial.model';
import {Select, Store} from '@ngxs/store';
import {RemoveTutorial} from '../actions/tutorila.action';
import {TutorialState} from '../state/tutorial.state';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  //tutorials$: Observable<Tutorial>
  @Select(TutorialState.getTutorials) tutorials$: Observable<Tutorial>

  constructor(private store: Store) {
    //this.tutorials$ = this.store.select((state => state.tutorials.tutorials))
  }

  delTutorial(name) {
    this.store.dispatch(new RemoveTutorial(name))
  }

  ngOnInit() {
  }

}
