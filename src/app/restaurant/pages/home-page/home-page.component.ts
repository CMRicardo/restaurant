import { Component, computed, inject } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { TitleService } from 'src/app/shared/services/title.service';

@Component({
  templateUrl: './home-page.component.html',
  styles: [
  ]
})
export class HomePageComponent {
  private authService = inject(AuthService)
  private titleService = inject(TitleService)
  public employeeType = computed(() => this.authService.currentEmployee()?.employeeType)

  ngOnInit(): void {
    this.titleService.title.set('Inicio')
  }
}
