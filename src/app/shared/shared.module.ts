import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';

import { ErrorLabelComponent } from './components/error-label/error-label.component';
import { HeaderComponent } from './components/header/header.component';
import { NavLinkComponent } from './components/nav-link/nav-link.component';
import { UserInfoComponent } from './components/user-info/user-info.component';

@NgModule({
  declarations: [
    HeaderComponent,
    WelcomePageComponent,
    NavLinkComponent,
    UserInfoComponent,
    ErrorLabelComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    ErrorLabelComponent
  ]
})
export class SharedModule { }
