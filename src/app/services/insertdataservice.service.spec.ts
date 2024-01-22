import { TestBed } from '@angular/core/testing';

import { InsertdataserviceService } from './insertdataservice.service';

describe('InsertdataserviceService', () => {
  let service: InsertdataserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsertdataserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
