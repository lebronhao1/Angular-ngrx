import { createSelector } from "@ngrx/store";

import * as fromFeature from "../reducers";
import * as fromToppingsReducer from "../reducers/toppings.reducer";
import { Topping } from "src/products/models/topping.model";
import { getProductsState } from "src/products/store";

export const getToppingState = createSelector(
  fromFeature.getProductsState,
  (state: fromFeature.ProductsState) => state.toppings
);

export const getToppingsEntities = createSelector(
  getToppingState,
  fromToppingsReducer.getToppingEntities
);

export const getAllToppings = createSelector(getToppingsEntities, entities => {
  return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
});

export const getToppingsLoading = createSelector(
  getToppingState,
  fromToppingsReducer.getToppingsLoading
);

export const getToppingsLoaded = createSelector(
  getToppingState,
  fromToppingsReducer.getToppingsLoaded
);

export const getSelectedToppings = createSelector(
  getToppingState,
  fromToppingsReducer.getSelectedToppings
);
