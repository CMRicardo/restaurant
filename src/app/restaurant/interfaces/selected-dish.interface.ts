import { Dish } from "./dish.interface"
import { Dish1 } from "./dish1.constant"

export interface SelectedDish extends Dish1 {
  quantity?: number
}
