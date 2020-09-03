import { TestBed } from '@angular/core/testing';

import { UserGateway } from './usergateway.service';

describe('UsergatewayService', () => {
  let service: UserGateway;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserGateway);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
