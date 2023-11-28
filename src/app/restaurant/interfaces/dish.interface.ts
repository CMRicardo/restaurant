export interface Dish {
  id ?: string
  name: string
  imageUrl: string
  category: string
  price: number
}

export const DishCategory = [
  "Entrada",
  "Plato fuerte",
  "Bebidas",
  "Postre"
]
