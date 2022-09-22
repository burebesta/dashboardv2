import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { randomUserGeneratorService } from 'src/app/services/random-user-generator.service'
 
@Injectable()
export class randomUserEffects {
 
  loadRandomUsers$ = createEffect(() => this.actions$.pipe(
    ofType('[Meeting Component] Load Users'),
    mergeMap((data) => this.randomUserService.getRandomUser({count:data['count']})
      .pipe(
        map(userData => ({ type: '[Meeting Component] Load Users Success', payload: userData })),
        catchError(() => EMPTY)
      ))
    )
  )

  constructor(
    private actions$: Actions,
    private randomUserService: randomUserGeneratorService
  ) {}
}