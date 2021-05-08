import { Component, OnDestroy, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Customer } from '../models/customer.model';
import { Subscription } from 'rxjs';
import { CustomersService } from '../services/customers.service';
import { Router } from '@angular/router';
import {  MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'test-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
  
})


export class CustomerListComponent implements OnInit, OnDestroy, AfterViewInit {
  customers : Customer[];
  displayedColumns: string[] = ['name', 'lastname', 'email','del'];
  customerSubscription : Subscription;
  dataSource = new MatTableDataSource();
 

  constructor(private customersService : CustomersService, private router: Router) { 
    
  }

  ngOnInit(): void {
    this.customerSubscription =this.customersService.customersSubject.subscribe(
      (customers : Customer[]) => {
        this.customers = customers;
        this.dataSource = new MatTableDataSource(customers);
        this.sortCustomer();
        
      }
    )
    this.customersService.getCustomers();
    this.customersService.emitCustomers();
   
  }

  onNewCustomer() {
    this.router.navigate(['/customer','new'])
  }

  onDeleteCustomer(customer : Customer) {
    this.customersService.removeCustomer(customer);
  }

  onViewCustomer(id : string) {
    this.router.navigate(['/customer','view' , id])
  }

  
  ngOnDestroy() {
    this.customerSubscription.unsubscribe();
  }

  sortCustomer() {
    this.dataSource.sort = this.sort;
  }


  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.sortCustomer();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    /* this.dataSource.filter = filterValue.trim().toLowerCase(); */
    if(filterValue !="") {
      const customerTemp = this.customers.filter(function(customer) {
        return customer.name.toLowerCase().includes(filterValue.trim().toLowerCase()) || customer.lastname.toLowerCase().includes(filterValue.trim().toLowerCase()) || customer.email.toLowerCase().includes(filterValue.trim().toLowerCase()) ;
      }) 
      this.dataSource = new MatTableDataSource(customerTemp);
      this.sortCustomer();
    }
    else {
      this.dataSource = new MatTableDataSource(this.customers);
      this.sortCustomer();
    }
    

  }

}


