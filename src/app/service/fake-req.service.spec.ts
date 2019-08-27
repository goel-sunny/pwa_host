import { TestBed } from '@angular/core/testing';

import { FakeReqService } from './fake-req.service';

describe('FakeReqService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FakeReqService = TestBed.get(FakeReqService);
    expect(service).toBeTruthy();
  });
});
