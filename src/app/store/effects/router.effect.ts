import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Location } from "@angular/common";

import { Effect, Actions } from "@ngrx/effects";

import { map, tap } from "rxjs/operators";

import * as routerActions from "../actions";

@Injectable()
export class RouterEffects {
  constructor(
    private action$: Actions,
    private router: Router,
    private location: Location
  ) {}

  @Effect({ dispatch: false })
  navigate$ = this.action$.ofType(routerActions.GO).pipe(
    map((action: routerActions.Go) => action.payload),
    tap(({ path, query: queryParams, extras }) => {
      this.router.navigate(path, { queryParams, ...extras });
    })
  );

  @Effect({ dispatch: false })
  navigateForward$ = this.action$
    .ofType(routerActions.FORWARD)
    .pipe(tap(() => this.location.forward()));

  @Effect({ dispatch: false })
  navigateBack$ = this.action$
    .ofType(routerActions.BACK)
    .pipe(tap(() => this.location.back()));
}
