import { Dish } from "./dish.interface"

export interface SelectedDish extends Dish {
  quantity?: number
}