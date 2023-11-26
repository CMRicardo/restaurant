import { Component } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styles: [
  ]
})
export class UserInfoComponent {
  public user = {
    profilePic: 'https://randomuser.me/api/portraits/men/35.jpg',
    name: 'Jhon Doe',
    email: 'hello@email.com'
  }
}
