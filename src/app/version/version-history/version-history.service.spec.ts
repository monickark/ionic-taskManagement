import { TestBed } from '@angular/core/testing';

import { VersionHistoryService } from './version-history.service';

describe('VersionHistoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VersionHistoryService = TestBed.get(VersionHistoryService);
    expect(service).toBeTruthy();
  });
});
