import { TestBed } from '@angular/core/testing';

import { CommitServiceService } from './commit-service.service';

describe('CommitServiceService', () => {
  let service: CommitServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommitServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
