import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerListRoutingModule } from './customer-list-routing.module';
import { CustomerListComponent } from '../../customer-list/customer-list.component';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    CustomerListComponent,
  ],
  imports: [
    CommonModule,
    CustomerListRoutingModule,
    MatSortModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports : [
    CustomerListComponent,
  ]
})
export class CustomerListModule { }
