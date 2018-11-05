import { TestBed, inject } from '@angular/core/testing';

import { LlGlobalStoreService } from './ll-global-store.service';

describe('LlGlobalStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LlGlobalStoreService]
    });
  });

  it('should be created', inject([LlGlobalStoreService], (service: LlGlobalStoreService) => {
    expect(service).toBeTruthy();
  }));
});
