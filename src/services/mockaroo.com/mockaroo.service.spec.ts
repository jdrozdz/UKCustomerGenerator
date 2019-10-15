import { TestBed } from '@angular/core/testing';

import { MockarooService } from './mockaroo.service';

describe('MockarooService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockarooService = TestBed.get(MockarooService);
    expect(service).toBeTruthy();
  });
});
