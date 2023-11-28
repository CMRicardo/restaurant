export interface Dish1 {
  id ?: string;
  name: string;
  imageUrl: string | ArrayBuffer | null;
  description?: string;
  category: string;
  price: number;
}

export const DishCategory = [
  "Entrada",
  "Plato fuerte",
  "Bebidas",
  "Postre"
]
