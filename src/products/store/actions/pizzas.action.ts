import { Action } from "@ngrx/store";
import { Pizza } from "../../models/pizza.model";

export const LOAD_PIZZAS = "[product] Load Pizzas";
export const LOAD_PIZZAS_SUCCESS = "[product] Load Pizzas Success";
export const LOAD_PIZZAS_FAIL = "[product] Load Pizzas Fail";

export class LoadPizzas implements Action {
  readonly type = LOAD_PIZZAS;
}

export class LoadPizzasSuccess implements Action {
  readonly type = LOAD_PIZZAS_SUCCESS;
  constructor(public payload: Pizza[]) {}
}

export class LoadPizzasFail implements Action {
  readonly type = LOAD_PIZZAS_FAIL;
  constructor(public payload: any) {}
}

// Create Pizza
export const CREATE_PIZZA = "[product] Create Pizza";
export const CREATE_PIZZA_SUCCESS = "[product] Create Pizza Success";
export const CREATE_PIZZA_FAIL = "[product] Create Pizza Fail";

export class CreatePizza implements Action {
  readonly type = CREATE_PIZZA;
  constructor(public payload: Pizza) {}
}

export class CreatePizzaSuccess implements Action {
  readonly type = CREATE_PIZZA_SUCCESS;
  constructor(public payload: Pizza) {}
}

export class CreatePizzaFail implements Action {
  readonly type = CREATE_PIZZA_FAIL;
  constructor(public payload: any) {}
}

// Update Pizza
export const UPDATE_PIZZA = "[product] Update Pizza";
export const UPDATE_PIZZA_SUCCESS = "[product] Update Pizza Success";
export const UPDATE_PIZZA_FAIL = "[product] Update Pizza Fail";

export class UpdatePizza implements Action {
  readonly type = UPDATE_PIZZA;
  constructor(public payload: Pizza) {}
}

export class UpdatePizzaSuccess implements Action {
  readonly type = UPDATE_PIZZA_SUCCESS;
  constructor(public payload: Pizza) {}
}

export class UpdatePizzaFail implements Action {
  readonly type = UPDATE_PIZZA_FAIL;
  constructor(public payload: any) {}
}

export type PizzasAction =
  | LoadPizzas
  | LoadPizzasFail
  | LoadPizzasSuccess
  | CreatePizza
  | CreatePizzaSuccess
  | CreatePizzaFail
  | UpdatePizza
  | UpdatePizzaSuccess
  | UpdatePizzaFail;
