import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomersService } from '../../services/customers.service';
import { Customer } from '../../models/customer.model';

@Component({
  selector: 'test-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
  customer : Customer;

  customerForm  : FormGroup;
  fileIsUploading = false;
  fileUrl : string;
  fileUploaded = false;
  isEdit = false;

  constructor(private formbuilder : FormBuilder,
              private customerService : CustomersService,
              private router : Router,
              private route : ActivatedRoute ) { }

  ngOnInit(): void {
    this.customer= new Customer('','','');
    if (this.route.snapshot.params['id']) {
      this.isEdit = true;
      const id = this.route.snapshot.params['id'];
      this.customerService.getSingleCustomer(id).then(
        (customer : Customer) => {
          if(customer)  this.customer = customer;
          else this.router.navigate(['/customer']);
          this.initForm();
        }
      );
    }
   
    this.initForm();
  }

  initForm() {
    this.customerForm = this.formbuilder.group({
      email : [this.customer ? this.customer.email : '', [Validators.required, Validators.email]],
      name : [this.customer ? this.customer.name : '',Validators.required],
      lastname : [this.customer ? this.customer.lastname : '',Validators.required],
    })
  }

  onSaveCustomer() {
    const email = this.customerForm.get('email').value;
    const name = this.customerForm.get('name').value;
    const lastname = this.customerForm.get('lastname').value;
    
    const newCustomer = new Customer (email,name,lastname);

    if(this.isEdit) {
      newCustomer.id = this.customer.id;
    }

    if(this.fileUrl && this.fileUrl != '') {
      newCustomer.photo = this.fileUrl;
    }
    if(this.isEdit) this.customerService.editCustomer(newCustomer);
    else this.customerService.createNewCustomer(newCustomer);
    this.router.navigate(['/customer']);
  }

  onUploadFile(file : File) {
    this.fileIsUploading = true;
    this.customerService.uploadFile(file).then(
      (url : string) => {
        this.fileUrl = url;
        this.fileIsUploading = false;
        this.fileUploaded = true;
      }
    )
  }

  detectFiles(event) {
    this.onUploadFile(event.target.files[0]);
  }

}
