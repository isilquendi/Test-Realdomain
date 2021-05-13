import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';



@Component({
  selector: 'test-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentRoute;
  constructor(private titleService: Title,
              private translate: TranslateService,
              private router : Router
    ) {
    
    
   }
  
  ngOnInit(): void {
    this.currentRoute=this.router.url;
    this.translate.stream('dashboard.title').subscribe((value) => {
      this.titleService.setTitle(value)
    }) ;
  
  }

  

 

 
  }


