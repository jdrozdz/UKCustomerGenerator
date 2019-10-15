import { TestBed } from '@angular/core/testing';

import { PostcodesService } from './postcodes.service';

describe('PostcodesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostcodesService = TestBed.get(PostcodesService);
    expect(service).toBeTruthy();
  });
});
