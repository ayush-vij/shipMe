import { TestBed } from '@angular/core/testing';

import { DataplayService } from './dataplay.service';

describe('DataplayService', () => {
  let service: DataplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
