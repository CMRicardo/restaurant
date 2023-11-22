export interface Dish {
  id ?: string
  name: string
  imgUrl: string
  category: string
  price: number
}

export const DishCategory = [
  "Entradas",
  "Plato Fuerte",
  "Bebidas",
  "Postres"
]
