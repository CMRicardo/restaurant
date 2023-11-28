export interface Dish1 {
  id ?: string;
  name: string;
  imgUrl: string | ArrayBuffer | null;
  description?: string;
  category: string;
  price: number;
}

export const DishCategory = [
  "Entradas",
  "Plato Fuerte",
  "Bebidas",
  "Postres"
]
