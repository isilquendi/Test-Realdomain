import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomersService } from './services/customers.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerListModule } from './modules/customer-list/customer-list.module';
import { SingleCustomerModule } from './modules/single-customer/single-customer.module';
import { CustomerFormModule } from './modules/customer-form/customer-form.module';
import { MatIconModule} from "@angular/material/icon";
import { MatSlideToggleModule} from "@angular/material/slide-toggle";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { Title } from '@angular/platform-browser';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { TranslatePaginatorService } from './services/translate-paginator.service';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { TranslateDatepickerService } from './services/translate-datepicker.service';
import { MatDatepickerIntl } from '@angular/material/datepicker';

const appRoutes : Routes  = [
  {path : 'dashboard', component : DashboardComponent },
  {path : 'customer', loadChildren: () => import('./modules/customer-list/customer-list.module').then(mod => mod.CustomerListModule)},
  {path : 'customer/new', loadChildren: () => import('./modules/customer-form/customer-form.module').then(mod => mod.CustomerFormModule)},
  {path :  'customer/edit/:id', loadChildren: () => import('./modules/customer-form/customer-form.module').then(mod => mod.CustomerFormModule)},
  {path :  'customer/view/:id', loadChildren: () => import('./modules/single-customer/single-customer.module').then(mod => mod.SingleCustomerModule)},
  {path : '', redirectTo : 'dashboard', pathMatch : 'full'},
  {path : '**', redirectTo : 'dashboard'}
]

@NgModule({
  declarations: [AppComponent, HeaderComponent, DashboardComponent],
  imports: [BrowserModule,
            FormsModule,
            ReactiveFormsModule,
            HttpClientModule,
            RouterModule.forRoot(appRoutes),
            BrowserAnimationsModule,
            CustomerListModule,
            SingleCustomerModule,
            CustomerFormModule,
            MatIconModule,
            MatSlideToggleModule,
            MatToolbarModule,
            MatButtonToggleModule,
            TranslateModule.forRoot({
              loader: {
                  provide: TranslateLoader,
                  useFactory: HttpLoaderFactory,
                  deps: [HttpClient]
              }
          }),
  ],
  providers: [
    CustomersService,Title,
    {provide: MatPaginatorIntl, useClass: TranslatePaginatorService, },
    {provide: MatDatepickerIntl, useClass: TranslateDatepickerService},
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule {}

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
