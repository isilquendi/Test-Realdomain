import { Injectable } from '@angular/core';
import { Customer } from '../models/customer.model';
import { Subject } from 'rxjs';
import firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  customer : Customer;
  customers : Customer[] = [];
  customersSubject = new Subject<Customer[]>();
  

  constructor() {}

  emitCustomers() {
    this.customersSubject.next(this.customers);
    
  }

  saveCustomer(customer : Customer){
    var newCustomer =  firebase.database().ref('customers/').push();
    customer.id = newCustomer.key;
    newCustomer.set(customer);
  }

  saveEditCustomer(customer : Customer) {
    firebase.database().ref('customers/').child(customer.id).update(customer);
  }

  

  getCustomers() {
    firebase.database().ref('customers/')
      .on('value',(data)=>{
        if (data.val()) {
          const result = data.val();
          this.customers = Object.keys(result).map(key => {
            return result[key];
          })
        }
        else this.customers = [];
        this.emitCustomers();
      })
  }

  getSingleCustomer(id : string) {
    return new Promise (
      (resolve,reject) => {
        firebase.database().ref('customers/'+id).once('value').then(
          (data)=> {
            resolve(data.val());
          }, (error) => {
            reject(error);
            
          }
        );
      }
    );
  }

  createNewCustomer(newCustomer : Customer) {
    this.customers.push(newCustomer);
    this.saveCustomer(newCustomer);
    this.emitCustomers();
  }

  editCustomer(customer : Customer) {
    this.customers.push(customer);
    this.saveEditCustomer(customer);
    this.emitCustomers();
  }

  removeCustomer(customer : Customer) {
    firebase.database().ref('customers/'+customer.id).remove();
    this.emitCustomers();
  }

  uploadFile(file : File) {
    return new Promise(
      (resolve,reject) => {
        const id = Date.now().toString();
        const upload = firebase.storage().ref().child('images/'+ id + file.name).put(file);
        upload.on(firebase.storage.TaskEvent.STATE_CHANGED,
          ()=>{
            console.log('Loading');
          },
          (error)=>{
            console.log('Error : '+error)
          },
          ()=> {
            resolve(upload.snapshot.ref.getDownloadURL());
          }
          )

      }
    )
  }
}
