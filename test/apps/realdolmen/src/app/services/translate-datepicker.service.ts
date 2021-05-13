import { Injectable } from '@angular/core';
import {TranslateService,LangChangeEvent} from '@ngx-translate/core';
import { MatDatepickerIntl } from '@angular/material/datepicker';
import { DateAdapter } from '@angular/material/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateDatepickerService extends MatDatepickerIntl {

  constructor(private translate: TranslateService,private _adapter: DateAdapter<any>,) {
    super()
    this.translate.onLangChange.subscribe((e: LangChangeEvent) => {
      this.getAndInitTranslations(e.lang);
    });
  
    this.getAndInitTranslations('en');
   }

   getAndInitTranslations(lang : string) {
    this._adapter.setLocale(lang);
   }
}
