import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../../models/customer.model';
import { CustomersService } from '../../services/customers.service';
import { Title } from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'test-single-customer',
  templateUrl: './single-customer.component.html',
  styleUrls: ['./single-customer.component.css']
})
export class SingleCustomerComponent implements OnInit {
  customer : Customer;
  constructor(private route : ActivatedRoute,
              private customerService : CustomersService,
              private router : Router,
              private titleService: Title,
              private translate: TranslateService
              ) { }

  ngOnInit(): void {

    /** Set the Title */
    this.translate.stream('customers.single').subscribe((value) => {
      this.titleService.setTitle(value)
    }) ;
    
    /** Get the Customer by getting ths ID on the route parameter*/
    this.customer = new Customer('','','');
    const id = this.route.snapshot.params['id'];
    this.customerService.getSingleCustomer(id).then(
      (customer : Customer) => {

        if(customer) this.customer = customer;

        /** If the ID doesn't exist return to the Customer List */
        else this.router.navigate(['/customer']);
      },  
    );
  }

  /** Return to Customer List */
  onBack() {
    this.router.navigate(['/customer']);
  }

  /** Edit the Customer */
  onEdit() {
    this.router.navigate(['/customer','edit' , this.customer.id]);
  }

  /** Get the photo and if not photo display the dummy with gender considaration */
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

  /** Set the date display considering the language */
  getDate(date : number) {
    if(this.translate.currentLang)
      return  new Date(date).toLocaleDateString(this.translate.currentLang);
    else 
      return  new Date(date).toLocaleDateString('en');
  }

}
