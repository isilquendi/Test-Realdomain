import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';
import { MatPaginatorIntl } from '@angular/material/paginator';


const ITEMS_PER_PAGE = 'Items per page:';
const NEXT_PAGE = 'Next page';
const PREV_PAGE = 'Previous page';
const FIRST_PAGE = 'First page';
const LAST_PAGE = 'Last page';

@Injectable({
  providedIn: 'root'
})
export class TranslatePaginatorService extends MatPaginatorIntl  {

  constructor(private translate: TranslateService,private titleService: Title) {
    super();
    this.translate.onLangChange.subscribe((e: Event) => {
      this.getAndInitTranslations();
    });
    this.getAndInitTranslations();
   }

  public getAndInitTranslations(): void {
    this.translate.get([
      ITEMS_PER_PAGE,
      NEXT_PAGE,
      PREV_PAGE,
      FIRST_PAGE,
      LAST_PAGE,
    ])
      .subscribe((translation: any) => {
        this.itemsPerPageLabel = translation[ITEMS_PER_PAGE];
        this.nextPageLabel = translation[NEXT_PAGE];
        this.previousPageLabel = translation[PREV_PAGE];
        this.firstPageLabel = translation[FIRST_PAGE];
        this.lastPageLabel = translation[LAST_PAGE];
        
        this.changes.next();
      });
  }
}






