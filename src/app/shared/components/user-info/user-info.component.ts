import { Component } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styles: [
  ]
})
export class UserInfoComponent {
  public user = {
    profilePic: 'https://unsplash.it/640/425',
    name: 'Jhon Doe',
    email: 'hello@email.com'
  }
}
