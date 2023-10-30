import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  public dishes = [
    { id: '0', name: 'Sopa', imgUrl: 'https://unsplash.it/640/425' },
    { id: '1', name: 'Carne', imgUrl: 'https://unsplash.it/640/426' },
    { id: '2', name: 'Pasta', imgUrl: 'https://unsplash.it/640/427' }
  ]

  constructor() { }
}
