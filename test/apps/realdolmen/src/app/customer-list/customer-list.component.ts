import { Component, OnDestroy, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import { Customer } from '../models/customer.model';
import { Subscription } from 'rxjs';
import { CustomersService } from '../services/customers.service';
import { Router } from '@angular/router';
import {  MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'test-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
  
})


export class CustomerListComponent implements OnInit, OnDestroy, AfterViewInit {
  customers : Customer[];
  displayedColumns: string[] = ['select','name', 'lastname', 'email','creationDate','modificationDate','del'];
  customerSubscription : Subscription;
  dataSource = new MatTableDataSource();
  selection = new SelectionModel(true,[]);

  loading = true;

  constructor(private customersService : CustomersService, private router: Router) { 
    
  }

  ngOnInit(): void {
    this.customerSubscription =this.customersService.customersSubject.subscribe(
      (customers : Customer[]) => {
        console.log(customers.length);
        if(customers.length > 0) {
          this.loading=false;  
        }
        this.customers = customers;
        this.dataSource = new MatTableDataSource(customers);
        
        this.sortCustomer();
        
      }
    )
    this.customersService.getCustomers();
    this.customersService.emitCustomers();
    
  }


  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  ngAfterViewInit() {
    this.sortCustomer();
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
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    
  }

  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    if(filterValue !="") {
      const customerTemp = this.customers.filter(function(customer) {
        return customer.name.toLowerCase().includes(filterValue.trim().toLowerCase()) || customer.lastname.toLowerCase().includes(filterValue.trim().toLowerCase()) || customer.email.toLowerCase().includes(filterValue.trim().toLowerCase()) || new Date(customer.birthday).toLocaleDateString().includes(filterValue.trim()) ;
      }) 
      this.dataSource = new MatTableDataSource(customerTemp);      
    }
    else {
      this.dataSource = new MatTableDataSource(this.customers);  
    }
    
    this.sortCustomer();
    

  }

  getDate(date : number) {
    return  new Date(date).toLocaleString();
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Customer): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id}`;
  }

  /** Delete Selection */
  deleteSelection() {
    this.customersService.removeMultipleCustomer(this.selection.selected);
    this.selection.clear();
    

  }


}


