import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerFormComponent } from '../../customer-list/customer-form/customer-form.component';


const routes: Routes = [
  {path : 'customer/edit/:id', component : CustomerFormComponent},
  {path :  'customer/new', component : CustomerFormComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerFormRoutingModule { }
