import { MenuItem } from "./menu-items.interface";

export interface CurrentOrder {
  items: ItemInOrder[]
  subtotal: number
  taxes: number
  total: number
}

interface ItemInOrder extends MenuItem {
  quantity: number
}