import { TestBed } from '@angular/core/testing';

import { SongdataService } from './songdata.service';

describe('SongdataService', () => {
  let service: SongdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SongdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
