import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Fitment } from '../tire-fitment/fitment.model';
import { AppState } from '../app.state';

@Component({
  selector: 'app-tire-models',
  templateUrl: './tire-models.component.html',
  styleUrls: ['./tire-models.component.css']
})
export class TireModelsComponent implements OnInit {
  fitments: Observable<Fitment>;
  constructor(private store: Store<AppState>) {
    this.fitments = store.select('fitment');
  }

  ngOnInit(): void {}
}
