import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";

import { Store } from "@ngrx/store";

import { Observable } from "rxjs/Observable";
import { tap, map, switchMap, catchError, filter, take } from "rxjs/operators";
import { of } from "rxjs/observable/of";

import * as fromStore from "../store";
import { Pizza } from "../models/pizza.model";
import { ActivatedRouteSnapshot } from "@angular/router/src/router_state";

@Injectable()
export class PizzaExistsGuard implements CanActivate {
  constructor(private store: Store<fromStore.ProductsState>) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap(() => {
        const id = parseInt(route.params.pizzaId, 10);
        return this.hasPizza(id);
      }),
      catchError(() => of(false))
    );
  }

  hasPizza(id: number): Observable<boolean> {
    return this.store
      .select(fromStore.getPizzasEntities)
      .pipe(
        map((entities: { [id: number]: Pizza }) => !!entities[id]),
        take(1)
      );
  }

  checkStore(): Observable<boolean> {
    return this.store.select(fromStore.getPizzasLoaded).pipe(
      tap(loaded => {
        if (!loaded) this.store.dispatch(new fromStore.LoadPizzas());
      }),
      filter(loaded => loaded),
      take(1)
    );
  }
}
