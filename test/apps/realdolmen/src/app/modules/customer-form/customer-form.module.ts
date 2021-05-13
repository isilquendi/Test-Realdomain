import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerFormRoutingModule } from './customer-form-routing.module';

import { CustomerFormComponent } from '../../customer-list/customer-form/customer-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslateModule} from '@ngx-translate/core';

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
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatIconModule,
    MatCheckboxModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    TranslateModule.forChild()
  ]
})
export class CustomerFormModule { }
