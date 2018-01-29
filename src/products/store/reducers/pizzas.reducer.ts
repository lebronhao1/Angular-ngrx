import { Pizza } from "../../models/pizza.model";
import * as fromPizzasAction from "../actions/pizzas.action";

export interface PizzaState {
  data: Pizza[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: PizzaState = {
  data: [
    {
      name: "Plain Ol' Pepperoni",
      toppings: [
        {
          id: 10,
          name: "pepperoni"
        }
      ],
      id: 3
    }
  ],
  loaded: false,
  loading: false
};

export function reducer(
  state: PizzaState = initialState,
  action: fromPizzasAction.PizzasAction
): PizzaState {
  switch (action.type) {
    case fromPizzasAction.LOAD_PIZZAS: {
      return {
        ...state,
        loading: true
      };
    }
    case fromPizzasAction.LOAD_PIZZAS_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true
      };
    }
    case fromPizzasAction.LOAD_PIZZAS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
    default:
      return state;
  }
}

export const getPizzasLoading = (state: PizzaState) => state.loading;
export const getPizzasLoaded = (state: PizzaState) => state.loaded;
export const getPizzas = (state: PizzaState) => state.data;
