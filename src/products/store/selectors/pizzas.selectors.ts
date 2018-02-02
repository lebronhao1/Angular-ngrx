import { createSelector } from "@ngrx/store";

import * as fromRoot from "../../../app/store";
import * as fromFeature from "../reducers";
import * as fromPizzasReducer from "../reducers/pizzas.reducer";
import * as fromToppings from "../selectors/toppings.selectors";

import { Pizza } from "src/products/models/pizza.model";

export const getPizzaState = createSelector(
  fromFeature.getProductsState,
  (state: fromFeature.ProductsState) => state.pizzas
);

export const getPizzasEntities = createSelector(
  getPizzaState,
  fromPizzasReducer.getPizzasEntities
);

export const getSelectedPizza = createSelector(
  getPizzasEntities,
  fromRoot.getRouterState,
  (entities, router): Pizza => {
    return router.state && entities[router.state.params.pizzaId];
  }
);

export const getPizzaVisualisation = createSelector(
  getSelectedPizza,
  fromToppings.getToppingsEntities,
  fromToppings.getSelectedToppings,
  (pizza, toppingEntities, selectedToppings) => {
    const toppings = selectedToppings.map(id => toppingEntities[id]);
    return {
      ...pizza,
      toppings,
    };
  }
);

export const getAllPizzas = createSelector(getPizzasEntities, entities => {
  return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
});

export const getPizzasLoaded = createSelector(
  getPizzaState,
  fromPizzasReducer.getPizzasLoaded
);

export const getPizzasLoading = createSelector(
  getPizzaState,
  fromPizzasReducer.getPizzasLoading
);
