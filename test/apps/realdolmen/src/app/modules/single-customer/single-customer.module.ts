import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleCustomerRoutingModule } from './single-customer-routing.module';
import { SingleCustomerComponent } from '../../customer-list/single-customer/single-customer.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [ SingleCustomerComponent,],
  imports: [
    CommonModule,
    SingleCustomerRoutingModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class SingleCustomerModule { }
