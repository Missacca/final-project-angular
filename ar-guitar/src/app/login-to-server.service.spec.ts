import { TestBed } from '@angular/core/testing';

import { LoginToServerService } from './login-to-server.service';

describe('LoginToServerService', () => {
  let service: LoginToServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginToServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
