import { TestBed } from '@angular/core/testing';


import { TranslatePaginatorService } from './translate-paginator.service';

describe('TranslatePaginatorService', () => {
  let service: TranslatePaginatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslatePaginatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
