import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewOrderPageComponent } from './pages/new-order-page/new-order-page.component';
import { CustomerLayoutComponent } from './layouts/customer-layout/customer-layout.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerLayoutComponent,
    children: [
      { path: 'new-order', component: NewOrderPageComponent, title: 'Nueva Orden | Brisas del Litoral' },
      { path: '**', redirectTo: 'new-order' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
