import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  public title = signal('Titulo')
}
