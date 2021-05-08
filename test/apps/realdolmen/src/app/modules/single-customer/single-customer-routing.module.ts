import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SingleCustomerComponent } from '../../customer-list/single-customer/single-customer.component';

const routes: Routes = [
  {path : 'customer/view/:id', component : SingleCustomerComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SingleCustomerRoutingModule { }
