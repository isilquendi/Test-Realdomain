import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { Title } from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';



@Component({
  selector: 'test-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public prout: Observable<string>;
  constructor(private titleService: Title,
              private translate: TranslateService
    ) {
    
    
   }
  
  ngOnInit(): void {
    this.translate.stream('dashboard.title').subscribe((value) => {
      this.titleService.setTitle(value)
    }) ;
  
  }

  

 

 
  }


