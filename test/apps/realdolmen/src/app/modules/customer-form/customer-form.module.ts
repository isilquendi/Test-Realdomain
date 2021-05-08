import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerFormRoutingModule } from './customer-form-routing.module';

import { CustomerFormComponent } from '../../customer-list/customer-form/customer-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [CustomerFormComponent],
  imports: [
    CommonModule,
    CustomerFormRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,

  ]
})
export class CustomerFormModule { }
