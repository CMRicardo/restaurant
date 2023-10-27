import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  templateUrl: './restaurant-layout.component.html',
})
export class RestaurantLayoutComponent {
  
  private readonly titleService = inject(Title)
  public title: string = ''

  ngOnInit(): void {
    const fullTitle = this.titleService.getTitle()
    const unwantedText = '| Brisas del Litoral'
    this.title = fullTitle.replace(unwantedText, '').trim()
    
  }
}
