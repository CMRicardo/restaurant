import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuItemService {

  private API_URL = 'https://litoral-restaurant-api.1.us-1.fl0.io/menu-item'
  constructor() { }

}
