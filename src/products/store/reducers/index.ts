import * as fromPizzas from "./pizzas.reducer";
import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from "@ngrx/store";

export interface ProductsState {
  pizzas: fromPizzas.PizzaState;
}

export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: fromPizzas.reducer,
};

export const getProductsState = createFeatureSelector<ProductsState>(
  "products"
);
