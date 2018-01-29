import { Action } from "@ngrx/store";
import { Pizza } from "../../models/pizza.model";

export const LOAD_PIZZAS = "[product] Load Pizzas";
export const LOAD_PIZZAS_SUCCESS = "[product] Load Pizzas Success";
export const LOAD_PIZZAS_FAIL = "[product] Load Pizzas Fail";

export class LoadPizzas implements Action {
  type = LOAD_PIZZAS;
}

export class LoadPizzasSuccess implements Action {
  type = LOAD_PIZZAS_SUCCESS;
  constructor(public payload: Pizza[]) {}
}

export class LoadPizzasFail implements Action {
  type = LOAD_PIZZAS_FAIL;
  constructor(public payload: any) {}
}

export type PizzasAction = LoadPizzas | LoadPizzasFail | LoadPizzasSuccess;
