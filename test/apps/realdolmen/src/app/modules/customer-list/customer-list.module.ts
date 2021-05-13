import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerListRoutingModule } from './customer-list-routing.module';
import { CustomerListComponent } from '../../customer-list/customer-list.component';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslateModule} from '@ngx-translate/core';


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
    MatCheckboxModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    TranslateModule.forChild()
  ],
  exports : [
    CustomerListComponent,
  ]
})
export class CustomerListModule { }
