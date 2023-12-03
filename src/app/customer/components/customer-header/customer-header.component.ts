import { Component, computed, inject } from '@angular/core';
import { TitleService } from '../../services/title.service';

@Component({
  selector: 'customer-header',
  templateUrl: './customer-header.component.html',
  styles: [
  ]
})
export class CustomerHeaderComponent {
  private titleService = inject(TitleService)
  
  public title = computed(() => this.titleService.title())
}
