import { TestBed } from '@angular/core/testing';

import { UsersWithApiService } from './users-with-api.service';

describe('UsersWithApiService', () => {
  let service: UsersWithApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersWithApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
