import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { ContainerComponent } from './components/container/container.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';



@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    ContainerComponent,
    SearchbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LayoutComponent,
  ]
})
export class SharedModule { }
