import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../../models/customer.model';
import { CustomersService } from '../../services/customers.service';

@Component({
  selector: 'test-single-customer',
  templateUrl: './single-customer.component.html',
  styleUrls: ['./single-customer.component.css']
})
export class SingleCustomerComponent implements OnInit {
  customer : Customer;
  constructor(private route : ActivatedRoute,
              private customerService : CustomersService,
              private router : Router) { }

  ngOnInit(): void {
    this.customer = new Customer('','','');
    const id = this.route.snapshot.params['id'];
    this.customerService.getSingleCustomer(id).then(
      (customer : Customer) => {
        if(customer) this.customer = customer;
        else this.router.navigate(['/customer']);
      },
      
    );
  }

  onBack() {
    this.router.navigate(['/customer']);
  }

  onEdit() {
    
    this.router.navigate(['/customer','edit' , this.customer.id]);
  }

  getPhotoUrl() {
    if (this.customer.photo) {
      return this.customer.photo;
    }
    else if( this.customer.gender == "female"){
      return './assets/images/woman-placeholder.jpg';
    }
    else {
      return './assets/images/man-placeholder.jpg';
    }
  }

  getDate(date : number) {
    return  new Date(date).toLocaleDateString();
  }

}
