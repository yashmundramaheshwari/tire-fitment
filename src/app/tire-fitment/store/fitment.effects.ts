import * as FitmentActions from './fitment.action';
import { Injectable } from '@angular/core';
import { Actions, Effect, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Make, Model, Trim, Year } from '../fitment.model';

@Injectable()
export class FitmentEffects {
  constructor(private http: HttpClient, private actions$: Actions) {}
  @Effect() loadYear$ = this.actions$.pipe(
    ofType(FitmentActions.LOAD_YEAR),
    mergeMap(() =>
      this.http.get('https://6080be3273292b0017cdbf2a.mockapi.io/years').pipe(
        map((data: Year) => {
          return new FitmentActions.LoadYearSuccess(data);
        }),
        catchError(error => of(new FitmentActions.LoadYearFail(error)))
      )
    )
  );
  @Effect() loadMake$ = this.actions$.pipe(
    ofType(FitmentActions.SET_YEAR),
    mergeMap(() =>
      this.http.get('https://6080be3273292b0017cdbf2a.mockapi.io/makes').pipe(
        map((data: Make) => {
          return new FitmentActions.LoadMake(data);
        }),
        catchError(error => of(new FitmentActions.LoadYearFail(error)))
      )
    )
  );
  @Effect() loadModel$ = this.actions$.pipe(
    ofType(FitmentActions.SET_MAKE),
    mergeMap(() =>
      this.http.get('https://6080be3273292b0017cdbf2a.mockapi.io/models').pipe(
        map((data: Model) => {
          return new FitmentActions.LoadModel(data);
        }),
        catchError(error => of(new FitmentActions.LoadYearFail(error)))
      )
    )
  );
  @Effect() loadTrim$ = this.actions$.pipe(
    ofType(FitmentActions.SET_MODEL),
    mergeMap(() =>
      this.http.get('https://6080be3273292b0017cdbf2a.mockapi.io/trim').pipe(
        map((data: Trim) => {
          return new FitmentActions.LoadTrim(data);
        }),
        catchError(error => of(new FitmentActions.LoadYearFail(error)))
      )
    )
  );
}
