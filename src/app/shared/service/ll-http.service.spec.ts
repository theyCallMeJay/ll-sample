import { TestBed, inject } from '@angular/core/testing';

import { LlHttpService } from './ll-http.service';

describe('LlHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LlHttpService]
    });
  });

  it('should be created', inject([LlHttpService], (service: LlHttpService) => {
    expect(service).toBeTruthy();
  }));
});
