import { Injectable } from "@angular/core";

import { Effect, Actions } from "@ngrx/effects";

import { map, switchMap, catchError } from "rxjs/operators";
import { of } from "rxjs/observable/of";

import * as fromServices from "../../services";
import * as toppingActions from "../actions/toppings.action";

@Injectable()
export class ToppingsEffect {
  constructor(
    private action$: Actions,
    private toppingsService: fromServices.ToppingsService
  ) {}

  @Effect()
  loadToppings$ = this.action$.ofType(toppingActions.LOAD_TOPPINGS).pipe(
    switchMap(() => {
      return this.toppingsService
        .getToppings()
        .pipe(
          map(toppings => new toppingActions.LoadToppingsSuccess(toppings)),
          catchError(error => of(new toppingActions.LoadToppingsFail(error)))
        );
    })
  );
}
