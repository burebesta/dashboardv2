import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { NumberGeneratorService } from 'src/app/services/number-generator.service';
 
@Injectable()
export class numberEffects {
 
  loadLikesNumbers$ = createEffect(() => this.actions$.pipe(
    ofType('[Admin Panel] Load Likes Numbers'),
    mergeMap((data) => this.numberService.getRandomNumbers({lowNumber:data['lowNumber'],highNumber:data['highNumber'],count:data['count']})
      .pipe(
        map(numberData => ({ type: '[Number API] Likes Numbers Loaded Success', payload: numberData })),
        catchError(() => EMPTY)
      ))
    )
  )
  loadTargetsNumbers$ = createEffect(() => this.actions$.pipe(
    ofType('[Admin Panel] Load Targets Numbers'),
    mergeMap((data) => this.numberService.getRandomNumbers({lowNumber:data['lowNumber'],highNumber:data['highNumber'],count:data['count']})
      .pipe(
        map(numberData => ({ type: '[Number API] Targets Numbers Loaded Success', payload: numberData })),
        catchError(() => EMPTY)
      ))
    )
  );
 
  constructor(
    private actions$: Actions,
    private numberService: NumberGeneratorService
  ) {}
}