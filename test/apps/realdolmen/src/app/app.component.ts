import { Component } from '@angular/core';
import firebase from "firebase/app";
import "firebase/analytics";


@Component({
  selector: 'test-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'realdolmen';
  constructor() {
  var firebaseConfig = {
    apiKey: "AIzaSyDPkSGWPXLtrMVS1XuSP2mCdwMFEUPP-hA",
    authDomain: "realdolmen-10996.firebaseapp.com",
    databaseURL: "https://realdolmen-10996-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "realdolmen-10996",
    storageBucket: "realdolmen-10996.appspot.com",
    messagingSenderId: "450938557261",
    appId: "1:450938557261:web:bf015f4b5f6d53dc875d04",
    measurementId: "G-E3CKH6QN2R"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  }
}
