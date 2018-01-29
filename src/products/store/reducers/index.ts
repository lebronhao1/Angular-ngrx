import * as fromPizzas from "./pizzas.reducer";
import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap
} from "@ngrx/store";

export interface ProductsState {
  pizzas: fromPizzas.PizzaState;
}

export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: fromPizzas.reducer
};

export const getProductsState = createFeatureSelector<ProductsState>(
  "products"
);

export const getPizzaState = createSelector(
  getProductsState,
  state => state.pizzas
);

export const getAllPizzas = createSelector(getPizzaState, fromPizzas.getPizzas);
export const getPizzasLoaded = createSelector(
  getPizzaState,
  fromPizzas.getPizzasLoaded
);
export const getPizzasLoading = createSelector(
  getPizzaState,
  fromPizzas.getPizzasLoading
);
