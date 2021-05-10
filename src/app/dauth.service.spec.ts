import { TestBed } from '@angular/core/testing';

import { DAuthService } from './dauth.service';

describe('DAuthService', () => {
  let service: DAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
