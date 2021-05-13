import { Component,OnInit, Output , EventEmitter } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { FormControl } from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'test-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  @Output() setDarkMode = new EventEmitter<String>();
  constructor(private overlay: OverlayContainer, private translate: TranslateService) { }
  toggleControl = new FormControl(false);
  languageControl = new FormControl();
  menuToggle = false;
  ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe((darkMode) => {
      const darkClassName = 'darkMode';
      this.setDarkMode.emit( darkMode ? darkClassName : '');
      if (darkMode) {
        this.overlay.getContainerElement().classList.add(darkClassName);
      } else {
        this.overlay.getContainerElement().classList.remove(darkClassName);
      }
      
    });
    this.languageControl.valueChanges.subscribe((value) => {
      this.translate.use(value);
    });
  }

  menuUpdate() {
    if(this.menuToggle) {
      this.menuToggle=false;
    }
    else this.menuToggle=true;
  }

}
