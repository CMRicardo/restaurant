import { Component, OnInit, computed, inject } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { TitleService } from 'src/app/shared/services/title.service';
const DEFAULT_USER = { "id": "72101198-81c3-11ee-b53e-eaf15ba8dff1", "employeeType": "Gerente", "firstName": "Daniel", "secondName": "Alejandro", "lastName": "Corrales", "idNumber": "0511201103483", "phoneNumber": "12345678", "email": "daniel@litoral.com", "password": "admin123", "profilePictureUrl": "https://randomuser.me/api/portraits/men/80.jpg", "address": "Villanueva" }
@Component({
  templateUrl: './home-page.component.html',
  styles: [
  ]
})
export class HomePageComponent {
  private authService = inject(AuthService)
  private titleService = inject(TitleService)
  public employeeType = computed(() => this.authService.currentUser?.employeeType)

  ngOnInit(): void {
    this.titleService.title.set('Inicio')
    if (!this.authService.currentUser) {
      this.authService.currentUser = DEFAULT_USER
    }
  }
}
