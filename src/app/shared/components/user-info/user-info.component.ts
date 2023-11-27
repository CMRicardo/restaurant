import { Component, OnInit, inject } from '@angular/core';
import { Employee } from 'src/app/auth/interfaces/customers-response.interface';
import { AuthService } from 'src/app/auth/services/auth.service';

const DEFAULT_USER = { "id": "72101198-81c3-11ee-b53e-eaf15ba8dff1", "employeeType": "Gerente", "firstName": "Daniel", "secondName": "Alejandro", "lastName": "Corrales", "idNumber": "0511201103483", "phoneNumber": "12345678", "email": "daniel@litoral.com", "password": "admin123", "profilePictureUrl": "https://randomuser.me/api/portraits/men/80.jpg", "address": "Villanueva" }

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styles: [
  ]
})
export class UserInfoComponent implements OnInit {
  private authService = inject(AuthService)
  public user?: Employee

  ngOnInit(): void {
    this.user = this.authService!.currentUser
    if (!this.user) {
      this.user = DEFAULT_USER
    }
  }

}
