import { TestBed } from '@angular/core/testing';

import { TranslateDatepickerService } from './translate-datepicker.service';

describe('TranslateDatepickerService', () => {
  let service: TranslateDatepickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslateDatepickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
