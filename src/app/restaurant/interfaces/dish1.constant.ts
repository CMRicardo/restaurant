export interface Dish1 {
  id ?: string;
  name: string;
  imgUrl: string | ArrayBuffer | null;
  category: string;
  price: number;
}

export const DishCategory = [
  "Entradas",
  "Plato Fuerte",
  "Bebidas",
  "Postres"
]
