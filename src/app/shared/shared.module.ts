import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { RouterModule } from '@angular/router';
import { NavLinkComponent } from './components/nav-link/nav-link.component';
import { UserInfoComponent } from './components/user-info/user-info.component';

@NgModule({
  declarations: [
    HeaderComponent,
    WelcomePageComponent,
    NavLinkComponent,
    UserInfoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule { }
