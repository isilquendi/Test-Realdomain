import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomersService } from '../../services/customers.service';
import { Customer } from '../../models/customer.model';
import { DateAdapter,MAT_DATE_LOCALE } from '@angular/material/core';


@Component({
  selector: 'test-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css'],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }]
})
export class CustomerFormComponent implements OnInit {
  customer : Customer;

  customerForm  : FormGroup;
  
  fileIsUploading = false;
  fileUrl : string;
  fileUploaded = false;
  
  isEdit = false;

  gender : string;

  maxDate = new Date(Date.now());

  interests = [
    {name : 'Html', interested : false},
    {name : 'Css', interested : false},
    {name : 'Angular', interested : false},
    {name : 'React', interested : false},
    {name : 'Php', interested : false},
    {name : '3D', interested : false},  
  ]

  availability : string;

  availabilities = ['Full-Time', 'Part-Time','Both']

  constructor(private formbuilder : FormBuilder,
              private customerService : CustomersService,
              private router : Router,
              private route : ActivatedRoute,
              private _adapter: DateAdapter<any> ) { }

  ngOnInit(): void {
    this._adapter.setLocale('gb');
    if (this.route.snapshot.params['id']) {
      this.customer= new Customer('','','');
      this.isEdit = true;
      const id = this.route.snapshot.params['id'];
      this.customerService.getSingleCustomer(id).then(
        (customer : Customer) => {
          if(customer)  {
            this.customer = customer;
            this.gender = this.customer.gender;
            if(this.customer.interests) {
              this.customer.interests.forEach(interest => {
                const objIndex = this.interests.findIndex((obj => obj.name == interest.name));
                this.interests[objIndex].interested=interest.interested;
              })
            }
            this.availability = this.customer.availability;
           
          }
          else this.router.navigate(['/customer']);
          this.initForm();
          this.onValueChanges();
        }
      );
    }
   
    this.initForm();
    this.onValueChanges();
  }

  initForm() {
    this.customerForm = this.formbuilder.group({
      email : [this.customer && this.customer.email ? this.customer.email : '', [Validators.required, Validators.email]],
      name : [this.customer &&  this.customer.name ? this.customer.name : '',[Validators.required,Validators.pattern('^[A-Za-z0-9\',\-àâçèéêîôùû ]*$')]],
      lastname : [this.customer &&  this.customer.lastname ? this.customer.lastname : '',[Validators.required,Validators.pattern('^[A-Za-z0-9\',\-àâçèéêîôùû ]*$')]],
      gender : [this.customer &&  this.customer.gender ? this.customer.gender :'' ],
      phone : [this.customer &&  this.customer.phone ? this.customer.phone :'', [Validators.required, Validators.pattern('[- +()0-9]+')]],
      birthday : [this.customer &&  this.customer.birthday ? new Date(this.customer.birthday).toISOString() : ''],
      description : [this.customer &&  this.customer.description ? this.customer.description : ''],
      availability : [this.customer && this.customer.availability ? this.customer.availability : 'Full-Time', [Validators.required]]
    })
    
  }

  onSaveCustomer() {
    const email = this.customerForm.get('email').value;
    const name = this.customerForm.get('name').value;
    const lastname = this.customerForm.get('lastname').value;
    const birthday = this.customerForm.get('birthday').value;
    const gender = this.customerForm.get('gender').value;
    const phone = this.customerForm.get('phone').value;
    const description = this.customerForm.get('description').value;
    
    const newCustomer = new Customer (email,name,lastname);

    if(this.isEdit) {
      newCustomer.id = this.customer.id;
    }

    if(this.fileUrl && this.fileUrl != '') {
      newCustomer.photo = this.fileUrl;
    }

    if(birthday != '') {
      newCustomer.birthday = new Date(birthday).getTime();
    }

    if(gender != '') {
      newCustomer.gender = gender;
    }

    if (phone != '') {
      newCustomer.phone = phone;
    }

    if (this.isEdit && this.customer.creationDate ) {
      newCustomer.creationDate = this.customer.creationDate;
    }
    else {
      newCustomer.creationDate = Date.now();
    }

    
    newCustomer.modificationDate = Date.now();

    newCustomer.interests = this.interests;
    if(this.availability) {
      newCustomer.availability = this.availability;
    }
    else {
      newCustomer.availability="Full-Time";
    }
    
    newCustomer.description = description;
    


    if(this.isEdit)  {
      this.customerService.editCustomer(newCustomer);
      this.router.navigate(['/customer','view' , this.customer.id])
    }
    else {
      this.customerService.createNewCustomer(newCustomer);
      this.router.navigate(['/customer']);
    }
    
    

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

  onValueChanges()  :void {
    this.customerForm.valueChanges.subscribe(val => {
      this.gender = this.customerForm.get('gender').value;
    })
  }

  getPhotoUrl(){
    if(this.isEdit) {
      if(this.fileUrl) {
        return this.fileUrl;
      }
      else if(this.customer.photo && this.customer.photo!='') {
        return this.customer.photo;
      }
      else if( this.gender == "female"){
        return './assets/images/woman-placeholder.jpg';
      }
      else {
        return './assets/images/man-placeholder.jpg';
      }
    }
    else if (this.fileUrl) {
      return this.fileUrl;
    }
    else if( this.gender == "female"){
      return './assets/images/woman-placeholder.jpg';
    }
    else {
      return './assets/images/man-placeholder.jpg';
    }
  }

  updateCheckbox(event) {
    const objIndex = this.interests.findIndex((obj => obj.name == event.source.id));
    this.interests[objIndex].interested=event.checked;
  }

  udpateRadio(event) {
    this.availability = event.value;
  }

  onBack() {
    if(this.isEdit)  {
      this.router.navigate(['/customer','view' , this.customer.id])
    }
    else {
      this.router.navigate(['/customer']);
    }
  }

}
