import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleCustomerRoutingModule } from './single-customer-routing.module';
import { SingleCustomerComponent } from '../../customer-list/single-customer/single-customer.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [ SingleCustomerComponent,],
  imports: [
    CommonModule,
    SingleCustomerRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule
  ]
})
export class SingleCustomerModule { }
